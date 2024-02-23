const Product = require('../models/Product');

const createProducts = async (req, res) => {
    try {
        const { productImage, productName, productPrice } = req.body;

        const product = new Product({
            productImage,
            productName,
            productPrice
        })

        await product.save();
        res.status(201).json(product);

    }
    catch (error) {
        console.error("There is an error:", error)
        res.status(500).json({ message: 'Server Error' });
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    }
    catch (error) {
        console.error("There is an error:", error)
        res.status(500).json({ message: 'Server Error' });
    }
}

const getProduct = async (req, res) => {
    try {
        const id = req.params.id;

        const product = await Product.findById({ _id: id })
        res.status(200).json(product);
    }
    catch (error) {
        console.error("There is an error:", error)
        res.status(500).json({ message: 'Server Error' });
    }
}

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const updateProduct = await Product.findByIdAndUpdate(
            { _id: id },
            {
                productImage: req.body.productImage,
                productName: req.body.productName,
                productPrice: req.body.productPrice
            }
        )
        res.status(200).json(updateProduct);
    }
    catch (error) {
        console.error("There is an error:", error)
        res.status(500).json({ message: 'Server Error' });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete({ _id: id })
        res.status(200).json(deletedProduct);
    }
    catch (error) {
        console.error("There is an error:", error)
        res.status(500).json({ message: 'Server Error' })
    }
}
module.exports = { createProducts, getAllProducts, getProduct, updateUser, deleteProduct }