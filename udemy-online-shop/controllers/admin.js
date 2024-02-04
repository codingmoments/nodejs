const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  // This is how we can send an HTML file in the response
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

  // This is how we render a template and pass data to the template
  res.render('admin/add-product', {
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
  Product.fetchAll((products) => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
}