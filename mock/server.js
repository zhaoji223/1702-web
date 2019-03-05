const express = require('express')
const fs = require('fs')
const app = express()
const router = express.Router()
const config = require('./config.json')
const dataPath = __dirname + '/data'

var fileList = []

getFileList(dataPath)


fileList.forEach(filePath => {
    handleRouter(filePath)
})

app.listen('19000', function() {
    console.log('listen 19000')
})

function getFileList(path) {
    // readdirSync 该属性指定用于传给回调的文件名的字符编码
    let files = fs.readdirSync(path)
    console.log(files)
    files.forEach(item => {
        let tempPath = `${path}/${item}`
        // 返回的 fs.Stats 对象中的数值是否应为 bigint 型。默认值: false
        let stats = fs.statSync(tempPath)
        if (stats.isDirectory()) {
            // 如果是 文件夹, 则递归
            getFileList(tempPath)
        } else {
            // fileList 中存储 的是文件 path
            fileList.push(tempPath)
        }
    })
}

function handleRouter(filePath) {
    let fileJson = require(filePath)
    router.get('/', (req, res) => {
        res.send(fileJson)
    })
    router.get('/:id', (req, res) => {
        for (let i in fileJson) {
            if (req.params.id == fileJson[i].id) {
                return res.send(fileJson[i])
            }
        }
        res.send({});
    })
    router.post('/', (req, res) => {
        res.send(201)
    })
    router.put('/', (req, res) => {
        res.send(204)
    })
    router.delete('/', (req, res) => {
        res.send(203)
    })

    app.use(config[filePath.split('mock')[1]], router)
}