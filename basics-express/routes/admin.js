const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

// This handles GET method to /add-product
router.get('/add-product', productsController.getAddProduct);

// This handles POST method to /add-product
router.post('/add-product', productsController.postAddProduct);

module.exports = router;