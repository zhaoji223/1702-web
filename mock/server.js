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
    let files = fs.readdirSync(path)
    files.forEach(item => {
        let tempPath = `${path}/${item}`
        let stats = fs.statSync(tempPath)
        if (stats.isDirectory()) {
            getFileList(tempPath)
        } else {
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