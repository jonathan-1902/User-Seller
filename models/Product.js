const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productImage: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Products', productSchema);
