const mongoose = require('mongoose');
const Drugs= require('./drugModules');

const imageSchema = new mongoose.Schema({
  imageDate:{
    type:String,
  },
  drugRef:{
    type:mongoose.Schema.ObjectId, 
    ref:"Drugs"
  }
})
const Image = mongoose.model("Image", imageSchema)
module.exports = Image;