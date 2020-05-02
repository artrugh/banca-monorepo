// dependencies
const mongodb = require('mongodb');
const createError = require('http-errors');
const binary = mongodb.Binary;

// models
const Product = require('../models/Product');

exports.product = async (req, res, next) => {

    try {

        let product = new Product();
        // destruturing the body
        Object.entries(req.body).map(entry => product[entry[0]] = entry[1])

        // if not set atestimony profile image
        if (req.files === null) throw new createError(406);

        product.img_main = binary(req.files.img_main.data);
        product.img_mini = binary(req.files.img_mini.data);

        //save the product
        await product.save();

        res
            .status(200)
            .send(product);

    } catch (err) {

        next(err)
    }
}

exports.getProducts = async (req, res, next) => {

    try {
        const products = await Product.find()

        if (!products) throw new createError(404);

        res.status(200).send(products);

    } catch (e) {
        next(e);
    }
}