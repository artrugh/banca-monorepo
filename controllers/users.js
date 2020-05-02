// users controllers

// dependencies
const mongodb = require('mongodb');
const createError = require('http-errors');
const binary = mongodb.Binary;

// helpers

const { checkUpdateUser } = require('../lib/checkUpdateUser');
// models
const User = require('../models/User');
const Contact = require('../models/Contact');

// login user
exports.login = async (req, res, next) => {

    try {
        // destruturing the body
        const {
            email,
            password
        } = req.body
        // check if there is user with this email
        let user = await User.findOne({ email });
        if (!user) throw new createError(404);
        // generate token
        const token = user.generateAuthToken();
        // check password
        const canLogin = await user.checkPassword(password);
        // create an error in case the password doesn't match
        if (!canLogin) throw new createError(401);
        // data
        const data = user.getPublicFields();

        res
            .status(200)
            .cookie('token', token, {
                expires: new Date(Date.now() + 604800000),
                secure: false, // if we are not using https
                httpOnly: true
            })
            .send(data);
    } catch (e) {
        next(e);
    }
}

exports.logout = async (req, res, next) => {
    try {
        let { _id } = req.user;

        const user = await User
            .findById(_id)

        if (!user) throw new createError(404);

        res
            .clearCookie('token')
            .status(200)
            .send(`${user.name}, hasta pronto!`);
    } catch (e) {
        next(e)
    }
};

exports.sign = async (req, res, next) => {

    try {

        let user = new User();

        Object.entries(req.body).map(entry => user[entry[0]] = entry[1])

        // if a profile picture was stored
        if (req.files !== null) {
            user.img = binary(req.files.uploadedFile.data);
        } else {
            // if not, set a default user profile image
            user.img_default = "https://i.stack.imgur.com/l60Hf.png"
        }

        // set the token
        const token = await user.generateAuthToken(next);

        //save the user
        await user.save();

        const data = await user.getPublicFields(user);

        res
            .status(200)
            .cookie('token', token, {
                expires: new Date(Date.now() + 604800000),
                secure: false, // if we are not using https
                httpOnly: true
            })
            .send(data);

    } catch (err) {

        next(err)
    }
}

exports.getUserByToken = async (req, res, next) => {

    try {
        let { _id } = req.user;

        const user = await User
            .findById(_id)
            .select('-password -__v');
        // .populate({ path: 'order' });
        if (!user) throw new createError(404);

        const data = await user.getPublicFields(user);

        res.status(200)
            .send(data);
    } catch (e) {
        next(e);
    }
}

exports.updateUser = async (req, res, next) => {

    try {
        const user = await User
            .findById(req.user._id)

        //check user
        if (!user) throw new createError(404);

        const canLogin = await user.checkPassword(req.body.password);
        // create an error in case the password doesn't match
        if (!canLogin) throw new createError(401);

        checkUpdateUser(req, res, next, user)

    } catch (e) {
        next(e);
    }
};

exports.deleteUser = async (req, res, next) => {

    try {
        const { _id } = req.user;
        // What happens when an Admin want to delete a User's account??
        const user = await User.findByIdAndDelete(_id);

        if (!user) throw new createError(404);

        res
            .status(200)
            .clearCookie('token')
            .send(`${user.name} le echaremos de menos en Banca!`)
    } catch (e) {
        next(e);
    }
};

exports.getUsers = async (req, res, next) => {

    try {
        const users = await User.find()
            .populate({ path: 'orders' })
            .sort('lastName')
            // exclude password __v and tokens
            .select('-password -__v -tokens._id');
        // .populate({ path: 'orders' });
        if (!users) throw new createError(404);

        res.status(200).send(data);
    } catch (e) {
        next(e);
    }
}

exports.getUserByEmail = async (req, res) => {
    try {
        // check the email
        let user = await User
            .findOne({ email: req.params.id })
            .select('-password -__v');
        // .populate({ path: 'order' });
        // if not user
        if (!user) throw new createError(404);
        const data = await user.getPublicFields(user);
        res
            .status(200)
            .send(data);
    } catch (e) {
        next(e);
    }
};


exports.contact = async (req, res, next) => {

    try {

        let contact = new Contact();
        // destruturing the body
        Object.entries(req.body).map(entry => contact[entry[0]] = entry[1])

        //save the message
        await contact.save();

        res
            .status(200)
            .send(`Gracias por su mensaje.`);
    } catch (e) {
        next(e);
    }
}