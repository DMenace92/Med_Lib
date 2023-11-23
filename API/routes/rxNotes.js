const express = require('express');

const RxNotes = require('../modules/rxNotesModules')
const Router = new express.Router();



Router.post('/create/Note', async (req, res) => {
  const note = new RxNotes(req.body);
  try {
    await note.save();
    req.status(200).send({ drug });

  } catch (e) {
    res.status(400).send(e);
  }

})
//get many
Router.get('/fetch/Notes', async (req, res) => {

  try {
    const notes = await RxNotes.find();
    res.status(200).send(notes);

  } catch (e) {
    res.status(400).send(e);
  }

})

//get single
Router.get('/fetch/note/:id', async (req, res) => {
  try {
    const item = await RxNotes.findById(req.params.id)
    res.status(200).send(item)
  } catch (e) {
    req.status(400).send(e)
  }

})

//update drug
Router.patch('/updae/note/:id', async (req, res) => {
  try {
    // const note = await RxNotes.find
  } catch (e) {
    res.status(400).send(e)
  }

})

Router.delete('/delete/note/:id', async (req, res) => {
  try {
    const item = await RxNotes.remove(req.params.id);
    res.status(200).send(item);
  } catch (e) {
    res.status(400).send(e)
  }
})
module.exports = Router;

