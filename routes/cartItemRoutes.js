const express = require('express');
const router = express.Router();
const cartItemController = require('../Controller/CartItemsController');

// Create a new cart item
router.post('/addItem', cartItemController.addItemToCart);

// Get all cart items
router.get('/getItems', cartItemController.getCartItems);

// Update a cart item
router.put('/updateItem/:cartitemid', cartItemController.updateCartItem);

// Delete a cart item
router.delete('/deleteItem/:cartitemid', cartItemController.deleteCartItem);

module.exports = router;
