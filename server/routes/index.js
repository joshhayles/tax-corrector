
const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/signupModel')

router.post('/signup', (req, res) => {
    const signedUpUser = new signUpTemplateCopy({
        username:req.body.username,
        password:req.body.password
    })

    signedUpUser.save()
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})

module.exports = router