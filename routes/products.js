const express = require('express');

// ROUTES
// create the router handler
const router = express.Router();

// middleware
// // role
const roleAuthenticator = require("../middleware/roleAuthenticator");
// // authentificator
const auth = require('../middleware/auth');

const { product, getProducts } = require('./../controllers/products');

//@route 'POST api/products
//@desc add a Product
//@acces Admin
router.post('/products',
    auth,
    roleAuthenticator,
    product
);

//@route 'GET api/products
//@desc add a Product
//@acces Public
router.get('/products',
    getProducts
);

module.exports = router;
