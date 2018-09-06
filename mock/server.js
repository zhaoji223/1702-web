const express = require('express')
const router = express.Router()
const app = express()

app.listen('19000', function() {
    console.log('listen 19000')
})

router.get('/', (req, res) => {
    res.send({ 'name': 'Jinx' })
})

app.use('/test', router)