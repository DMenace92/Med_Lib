const mongoose = require('mongoose')
const { Schema } = mongoose;

const drugSpecs = new Schema({
    drugId: {
        type: mongoose.Schema.ObjectId,
        // ref: "Drugs"
    },
    labelWarning: {
        type: String
    },
    drugInteraction: {
        type: String
    },
    drugIndication: {
        type: String
    },
    drugTreatment: {
        type: String
    },
    drugSideEffects: {
        type: String
    },
    patientInformation: {
        type: String
    }


})
const DrugSpecs = mongoose.model('DrugSpecs', drugSpecs)
module.exports = DrugSpecs;