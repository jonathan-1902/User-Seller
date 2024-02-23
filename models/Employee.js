// A model name should always start with capital letter
// A modal should always be unique

const mongoose = require('mongoose');

// we will define the schema which is to be stored in Database  in the modal page


const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    }

})



module.exports = mongoose.model('Employee', employeeSchema)


