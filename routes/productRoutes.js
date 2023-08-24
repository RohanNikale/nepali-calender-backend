const express = require('express');
const router = express.Router();
const { createProduct, updateProduct, deleteProduct, getProductData,getProductList } = require('../Controller/productController');
const { isAuthenticatedAdmin } = require('../Middleware/adminAuth');

// Create Product
router.post('/createproduct', isAuthenticatedAdmin, createProduct);

// Update Product
router.put('/updateproduct/:productid', isAuthenticatedAdmin, updateProduct);

// Delete Product
router.delete('/deleteproduct/:productid', isAuthenticatedAdmin, deleteProduct);

// Read Product
router.get('/getproductdata/:productid', getProductData);

// list of products
router.get('/getproductList', getProductList);

module.exports = router;
