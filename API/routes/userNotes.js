const express = require('express')
const PNNotes = require('../modules/PatientNotes')
const User = require('../modules/userModules')
const auth = require('../MiddleWare/auth')


const Router = new express.Router();

Router.post('/create/usernotes', auth, async (req, res) => {
    const UNotes = new PNNotes(req.body)
    try {

        await UNotes.save()
        res.status(200).send(UNotes)
    } catch (e) {
        res.status(400).send(e)
    }
})
Router.get('/fetch/usernotes', auth, async (req, res) => {
    try {
        const otherUsr = req.user._id
        let find = {
            userId: {
                $eq: otherUsr
            }
        }
        const PNote = await PNNotes.find(find)
        res.status(200).send(PNote)
    } catch (e) {
        res.status(400).send(e)
        console.log("check you fetch request")
    }
})

Router.put('/update/usernotes/:_id', async (req, res) => {
    try {
        const { error } = validateProduct(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const product = await PNNotes.findById(req.params.id).exec();
        if (!product) { return res.status(404).send('The product with the given ID was not found.'); }

        let query = { $set: {} };
        for (let key in req.body) {
            if (product[key] && product[key] !== req.body[key]) { // if the field we have in req.body exists, we're gonna update it
                query.$set[key] = req.body[key];
            }
        }

        const updatedNote = await PNNotes.updateOne({ _id: req.params.id, query }).exec();

        res.send(updatedNote);

        // const userNotes = await PNNotes.findByIdAndUpdate(req.params.id);
        // res.statas(200).send(userNotes)
    } catch (e) {
        res.status(400).send(e)
    }
})
module.exports = Router