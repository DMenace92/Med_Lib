const mongoose = require('mongoose');
const { Schema } = mongoose;
const rxNotesSchema = new Schema({

  note: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },

  drug: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Drugs",
    requires: true
  }
  //my idea is to have this schema refrence the drug schema by the id. there can only be one note per drug.

  //ref:{

  //}
}, {
  timestamps: Date
})
const RxNotes = mongoose.model("RxNotes", rxNotesSchema)
module.exports = RxNotes