const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const encryption = require('./../lib/encryption');

require('dotenv').config();

const { Schema } = mongoose;

const UserSchema = new Schema({
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    name: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    zip_code: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order'
        }
    ],
    img: {
        type: Buffer
    },
    img_default: {
        type: String
    }
}, { timestamps: true });


// generate json web token 

UserSchema.methods.generateAuthToken = function (next) {

    try {
        const token = jwt.sign(
            { _id: this._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        return token

    } catch (err) {
        next(err)
    }
};

UserSchema.methods.getPublicFields = function () {

    return {
        role: this.role,
        _id: this._id,
        name: this.name,
        email: this.email,
        img: this.img,
        img_default: this.img_default,
        orders: this.orders
    };
};

UserSchema.methods.checkPassword = async function (password) {
    const user = this;
    return await encryption.compare(password, user.password);
};

UserSchema.pre('save', async function (next) {
    // only hash the password if it has been modified (or is new)
    if (!this.isModified('password')) return next();
    this.password = await encryption.encrypt(this.password);
    next();
});

UserSchema.statics.findByToken = function (token) {

    let decoded;    

    try {
        
        decoded = jwt.verify(token, process.env.JWT_SECRET);
        
    } catch (err) {
        return;
    }

    return this.findOne({
        _id: decoded._id
    });
};

module.exports = User = mongoose.model('user', UserSchema);