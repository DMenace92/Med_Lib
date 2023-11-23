const express = require('express')
const User = require('../modules/userModules')
const auth = require('../MiddleWare/auth')
const message = "auth did not work"

const Router = new express.Router();

Router.post('/register', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = user.generateAuthToken()
        res.status(201).send({ user, token })

    } catch (e) {
        res.status(402).send(e);


    }
})
Router.post('/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.username, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})
Router.post('/user/logout', auth, async (req, res) => {
    try {
        req.user.token = req.user.token.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send(e)
    }
})


module.exports = Router;