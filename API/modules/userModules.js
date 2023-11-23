const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const { Schema } = mongoose;


const userSchema = new Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    userType: {
        type: String,
        default: 'user',
    },
    Privlage: {
        type: String,
        default: "bronze",
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],


    //need to refrence patient notes
}, {
    timestamps: Date
})

userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()
    delete userObject.password
    delete userObject.tokens
    return userObject
}
userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, '08101555')
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token
}
const User = mongoose.model('User', userSchema)
module.exports = User