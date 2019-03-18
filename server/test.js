var url = require('url');
var https = require('https');
var HttpsProxyAgent = require('https-proxy-agent');
 
// HTTP/HTTPS proxy to connect to
var proxy = 'https://gateway.qschou.com';
console.log('using proxy server %j', proxy);
 
// HTTPS endpoint for the proxy to connect to
var endpoint = 'https://gateway.qschou.com/v3.0.0/index/auth';
console.log('attempting to GET %j', endpoint);
var options = url.parse(endpoint);
 
// create an instance of the `HttpsProxyAgent` class with the proxy server information
var agent = new HttpsProxyAgent(proxy);
options.agent = agent;
var fs = require('fs');
var privateKey  = fs.readFileSync('privatekey.pem');
var certificate = fs.readFileSync('ver.crt');
var credentials = {key: privateKey, cert: certificate};
 
https.get({...options, ...credentials}, function (res) {
  console.log('"response" event!', res.headers);
  res.pipe(process.stdout);
});