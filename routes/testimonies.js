const express = require('express');

// ROUTES
// create the router handler
const router = express.Router();

// middleware
// role
const roleAuthenticator = require("../middleware/roleAuthenticator");
// // authentificator
const auth = require('../middleware/auth');

const { testimony, getTestimonies } = require('./../controllers/testimonies');


//@route 'POST api/testimonies
//@desc add a Testimony
//@acces Admin
router.post('/testimonies',
    auth,
    roleAuthenticator,
    testimony
);

//@route 'GET api/testimonies
//@desc add a Testimony
//@acces Public
router.get('/testimonies',
    getTestimonies
);

module.exports = router;