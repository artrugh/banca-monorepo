const mongoose = require('mongoose');
const { Schema } = mongoose;

const TestimonySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    statement: {
        type: String,
        required: true
    },
    img: {
        type: Buffer
    }
}, { timestamps: true });

module.exports = mongoose.model("Testimony", TestimonySchema);