const mongoose = require('mongoose');
const { Schema } = mongoose;

const PNSchema = new Schema({
    UserNotes: {
        type: String,

    },
    DrNotes: {
        type: String
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },


}, {
    timestamps: Date
}
)
const PNNotes = mongoose.model("PNNotes", PNSchema)
module.exports = PNNotes;