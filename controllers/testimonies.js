// testimonies controllers

// dependencies
const mongodb = require('mongodb');
const createError = require('http-errors');
const binary = mongodb.Binary;

// models
const Testimony = require('../models/Testimony');

// add a Testimony
exports.testimony = async (req, res, next) => {

    try {

        const { name, statement } = req.body

        let testimony = new Testimony({
            name, statement
        });

        // if not set atestimony profile image
        if (req.files === null) throw new createError(406);

        testimony.img = binary(req.files.uploadedFile.data);

        //save the testimony
        await testimony.save();

        res
            .status(200)
            .send(testimony);

    } catch (err) {

        next(err)
    }
}

// get all Testimonies
exports.getTestimonies = async (req, res, next) => {

    try {
        const testimonies = await Testimony.find()

        if (!testimonies) throw new createError(404);

        res.status(200).send(testimonies);

    } catch (e) {
        next(e);
    }
}