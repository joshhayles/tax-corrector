
const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const signUpTemplateCopy = require('../models/signupModel')

router.post('/signup', async (req, res) => {

    const saltedPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password, saltedPassword)

    const signedUpUser = new signUpTemplateCopy({
        username:req.body.username,
        password:securePassword
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