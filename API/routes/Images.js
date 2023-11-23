const express = require('express');
const Images = require("../modules/RxImage");

const Router = new express.Router();


/*need to form a connetion between the two create functions the image create and the medication create along with the other getters and modifiers*/

Router.post('/create/drug', async (req, res)=>{
  const image = new Image(req.body);
  try{
    await image.save();
    res.status(200).send()
  }catch(e){
    res.status(400).send(e);
  }
})

Router.get('/fetch/drugs', async(req, res)=>{
  try{
    const image = await Images.find();
    res.status(200).send(images);
  }catch(e){
    res.status(400).send(e)
  }
})

module.exports = Router;