const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    //res.render('Login.js')
    res.send({ hello: 'Your express backend is connected to react!'})
})

module.exports = router