const Koa = require('koa');
const send = require('koa-send')
const cors = require('@koa/cors')
const proxy = require('koa-proxies')
const httpsProxyAgent = require('https-proxy-agent')
var url = require('url');
const https = require('https');
var fs = require('fs');
const app = new Koa();

var privateKey  = fs.readFileSync('privatekey.pem');
var certificate = fs.readFileSync('ver.crt');
var credentials = {key: privateKey, cert: certificate};

var getway = 'https://gateway.qschou.com';

// app.use(cors({
//     origin: '*',
//     credentials: true,
//     allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
//     allowHeaders: ['Authorization' , 'DNT' , 'User-Agent' ,'Keep-Alive' , 'Content-Type', 'Accept' , 'origin', 'X-Requested-With', 'Qsc-Token', 'platform'],
// }))

// app.use(proxy('/index/auth', {
//     target: 'https://m2.qschou.com/',
//     changeOrigin: true,
//     agent: new httpsProxyAgent('https://gateway.qschou.com'),
//     rewrite: path => path.replace(/^\/octocat(\/|\/\w+)?$/, '/vagusx'),
//     logs: true
//   }))

app.use(proxy('/index/auth', {
    target: 'https://gateway.qschou.com/v3.0.0/',
    changeOrigin: true,
    // agent: new httpsProxyAgent('https://gateway.qschou.com'),
    rewrite: path => path.replace(/^\/octocat(\/|\/\w+)?$/, '/vagusx'),
    logs: true
}))

app.use(async ctx => {
    await send(ctx, ctx.path, {root: __dirname + '/../dist/'})
});

https.createServer(credentials, app.callback()).listen(3001);
