const express = require('express')
const DrugSpecs = require('../modules/drugSpecs')

const Router = new express.Router()

//create method
Router.post('/create/drugSpecs/:id', async (req, res) => {
    const drugSpecs = new DrugSpecs(req.body);
    try {
               await drugSpecs.save();
               res.status(201).send({ drugSpecs });
    } catch (e) {
        res.status(400).send(e)
        console.log('there is an error')
    }
})

//fetch single method
// Router.get('./fetch/drug_specs/:id', async (req, res) => {
//     try {
//         res.status(200).send()
//     } catch (e) {
//         res.status(400).send(e)
//         console.log("there is a problem with the fetch single function: " + e)
//     }

// })

//fetch all method
Router.get('/fetch/drugSpecs/:drugId', async (req, res) => {
    try {
        const drugSpec = await DrugSpecs.find({drugId:req.params.drugId})
        res.status(200).send(drugSpec)
    } catch (e) {
        res.status(400).send(e)
        console.log("there is a problem with the fetch all function: " , e)
    }

})

//update single method
Router.put('./update/drug_specs/:id', async (req, res) => {
    try {
        const { error } = validateProduct(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        const drug_specs_item = await DrugSpecs.findById(req.params.id).exec();
        if (!drug_specs_item) {
            return res.status(404).send('the drug specs with the given ID was not Found.')
        }
    } catch (e) {
        res.status(400).send(e)
    }
})


//delete method
Router.delete('./delete/drug_specs/:_id', async (req, res) => {

})

module.exports =Router;