const express = require('express');

// ROUTES
// create the router handler
const router = express.Router();

// // authentificator
const auth = require('../middleware/auth');

const { addOrder } = require('./../controllers/orders');

//@route 'POST api/orders
//@desc add a Order
//@acces Public
router.post('/orders',
    auth,
    addOrder
);

module.exports = router;