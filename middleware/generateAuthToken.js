const jwt = require('jsonwebtoken');
const createError = require('http-errors');

// generate json web token
module.exports = generateAuthToken = user => {
    // create the payload and also pass the role
    const payload = {
        user: {
            _id: user._id,
            email: user.email,
            role: user.role
        }
    }
    try {
        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' });
        return token

    } catch (err) {
        // res.status(400).json("ops, intenta de nuevo");
        throw new createError(401);
    }

}