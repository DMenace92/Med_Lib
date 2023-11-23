const mongoose = require('mongoose')
const { Schema } = mongoose;

const drugSchema = new Schema({
  drugName: {
    type: String,
  },
  medDose: {
    type: String,
  },
  medUnit: {
    type: String,
    default: "mg"
  },
  form: {
    type: String,
  },
  generic: {
    type: Boolean,
    default: false,
  },
  dClass: {
    type: String,
  },
  FDAAproved: {
    type: Boolean,
  }
}, {
  timestamps: Date
})
const Drugs = mongoose.model('Drugs', drugSchema)
module.exports = Drugs