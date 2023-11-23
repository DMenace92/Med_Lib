const express = require('express')
const Drugs = require('../modules/drugModules');
const csv = require('csvtojson')
const multer = require('multer');

const Router = new express.Router();
const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
      cb(null, "./routes/fileUploads" );
  },
  filename:(req,file,cb)=>{
      cb(null, file.originalname );
  },
});
const upload = multer({ storage });

// Define a POST route for uploading CSV files

Router.post('/upload/many', upload.single('csvfile'),async (req, res) => {
  const jsonArray = await csv().fromFile(req.file.path)
  // console.log(jsonArray)
  try{
      Drugs.insertMany(jsonArray,(err, result)=>{
          if(err){
              return res.status(500).json(err,"there was an error")
          }
          return res.json("added successfuly")
      })
      // res.json(jsonArray)
  }catch(e){
      res.status(500).send(e)
  }
});
//create single drug
Router.post('/create/drug', async (req, res) => {
  const drug = new Drugs(req.body);
  try {
    await drug.save();
    res.status(200).send({ drug });

  } catch (e) {
    res.status(400).send(e);
    console.log("did not work ")
  }

})
//get many
Router.get('/fetch/drugs', async (req, res) => {
  try {
    const drugs = await Drugs.find();
    res.status(200).send(drugs)
  } catch (e) {
    res.status(400).send(e)

  }
})

//get single
Router.get('/fetch/drug/:id', async (req, res) => {
  try {
    const drug = await Drugs.findById(req.params.id)
    res.status(200).send(drug)
  } catch (e) {
    res.status(400).send(e)
  }
})

//update drug
Router.patch('/update/drug/:id', async (req, res) => {
  try {
    const drug = await Drugs.findOne(req.params.id)
    res.status(200).send(drug)
  } catch (e) {
    res.status(400).send(e)
  }

})
//delete single drug
Router.delete('/delete/drug/:_id', async (req, res) => {
  try {
    const note = await Drugs.remove(req.params.id);
    res.status(200).send(note);
  } catch (e) {
    res.status(400).send(e)
  }

})
module.exports = Router;