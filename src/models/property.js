// Property model
const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

propertySchema.virtual('rooms', {
    ref: 'Room',
    localField: '_id',
    foreignField: 'owner'
})


const Property = mongoose.model('Property', propertySchema)

module.exports = Property 