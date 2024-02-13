const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// This handles GET method to /add-product
router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

// This handles POST method to /add-product
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;