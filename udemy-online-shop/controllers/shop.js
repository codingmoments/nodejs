const path = require('path');
const rootDir = require('../util/path');

const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  // This is how we send an HTML file as the response
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  // Below is the alternative way of defining the path
  // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));

  Product.fetchAll((products) => {
    console.log('products.js products :', products);

    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
}

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
}

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
}