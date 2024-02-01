const path = require('path');
const rootDir = require('../util/path');

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  // This is how we can send an HTML file in the response
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

  // This is how we render a template and pass data to the template
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  console.log('products.js request body for /add-product : ', req.body);
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
}

exports.getProducts = (req, res, next) => {
  // This is how we send an HTML file as the response
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  // Below is the alternative way of defining the path
  // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));

  Product.fetchAll((products) => {
    console.log('products.js products :', products);

    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
};