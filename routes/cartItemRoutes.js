const express = require('express');
const router = express.Router();
const cartItemController = require('../Controller/CartItemsController');
const { isAuthenticatedUser } = require('../Middleware/auth');

// Create a new cart item
router.post('/addItem',isAuthenticatedUser, cartItemController.addItemToCart);

// Get all cart items
router.get('/getItems',isAuthenticatedUser, cartItemController.getCartItems);

// Update a cart item
router.put('/updateItem/:cartitemid',isAuthenticatedUser, cartItemController.updateCartItem);

// Delete a cart item
router.delete('/deleteItem/:cartitemid',isAuthenticatedUser, cartItemController.deleteCartItem);

module.exports = router;
