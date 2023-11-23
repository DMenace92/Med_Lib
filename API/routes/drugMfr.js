const express = require('express')
const DM = require('../modules/drugManufacture')

const Router = new express.Router()

Router.post('/create/drugMfr/:id', async (req, res) => {
    const drugMfr = new DM(req.body);
    try {
        await drugMfr.save();
        res.status(200).send({ drugMfr });
    } catch (e) {
        res.status(400).send(e);
        console.log('did not work!')
    }
})
Router.get('/fetch/drugMfr/:drugId', async (req, res) => {
    console.log(req.params.drugId)
    try {
       
        const drugMfr = await DM.find({drugId:req.params.drugId})
        


        res.status(200).send(drugMfr)
    } catch (e) {
        res.status(400).send(e)
        console.log('error 500')
    }
})
Router.patch('/update/drugMfr/:drugId', async (req, res) => {
    try {
        const drugMfr = await DM.findOne(req.params.id)
        res.status(200).send(drugMfr)
    } catch (e) {
        res.status(400).send(e)
    }
})
Router.delete('/delete/drugMfr/:id', async (req, res) => {
    try {
        const drugMfr = await DM.remove(req, params.id);
        res.status(200).send(drugMfr);
    } catch (e) {
        res.status(400).send(e)
    }
})
module.exports = Router;