const express = require('express');

require('dotenv').config();

// middleware
// role
const roleAuthenticator = require("../middleware/roleAuthenticator");
// // authentificator
const auth = require('../middleware/auth');
// // validators
const {
    userValidationNewPassword,
    userValidationEmail,
    userValidationRules,
    userValidationErrorHandling
} = require('../validators/validator');

// const {
//     validateEmailPassword,
//     validateRegister,
//     validateUserDataErrorHandling
// } = require('./../middleware/validators');

// controllers
const {
    login,
    logout,
    sign,
    getUsers,
    getUserByEmail,
    getUserByToken,
    updateUser,
    deleteUser,
    contact

} = require('./../controllers/users');

// models
const User = require('../models/User');

// ROUTES
// create the router handler
const router = express.Router();

//@route 'POST api/login
//@desc Login User
//@acces Public

router.post('/login',
    userValidationRules(),
    userValidationErrorHandling,
    login);

//@route 'POST api/sign
//@desc Register User
//@acces Public

router.post('/sign',
    userValidationRules(),
    userValidationErrorHandling,
    sign
);

//@route 'POST api/logout
//@desc Login User
//@acces Public

router.post('/logout',
    auth,
    logout
);

//@route 'GET api/user
//@desc get a User by token
//@acces Public

router.get('/user',
    auth,
    getUserByToken
);

//@route 'PUT api/user/
//@desc update a User by token
//@acces Public

router.put('/user',
    auth,
    userValidationNewPassword(),
    userValidationErrorHandling,
    updateUser
);

//@route 'DELETE api/user
//@desc delete a User by token
//@acces Public

router.delete('/user',
    auth,
    deleteUser
);

//@route 'GET api/users
//@desc get Users
//@acces Admin

router.get('/users',
    auth,
    roleAuthenticator,
    getUsers
);

//@route 'GET api/user/:id
//@desc get a User by email
//@acces Public

router.get('/user/:id',
    auth,
    getUserByEmail
);

//@route 'POST api/contact
//@desc post a Message
//@acces Public

router.post('/contact',
    userValidationEmail(),
    userValidationErrorHandling,
    contact
);


module.exports = router;