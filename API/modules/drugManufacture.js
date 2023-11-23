const mongoose = require('mongoose')
const { Schema } = mongoose;

const manufactureSchema = new Schema({
    drugId: {
        type: mongoose.Schema.ObjectId,
    },
    NDCNumber: {
        type: String,
        // required: true,
    },
    mfrName: {
        type: String,
        // required: true,
    },
    drugShape: {
        type: String,
    },
    drugColor: {
        type: String,
    },
    drugMark: {
        type: String
    },
})
const Manufacture = mongoose.model('Manufacture', manufactureSchema)
module.exports = Manufacture;