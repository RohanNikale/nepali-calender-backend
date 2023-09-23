const CartItem = require('../Models/cartItemModel');

exports.addItemToCart = async (req, res) => {
  try {
    const { product, quantity } = req.body;
    
    // Check if the product is already in the cart
    const existingCartItem = await CartItem.findOne({ userId: req.user.id, product });
    
    if (existingCartItem) {
      // If the product is already in the cart, update its quantity
      existingCartItem.quantity += quantity;
      await existingCartItem.save();

      return res.status(200).json({
        message: 'Item quantity updated in cart',
        status: true,
        cartItem: existingCartItem
      });
    } else {
      // If the product is not in the cart, add it as a new cart item
      const cartItem = new CartItem({ userId: req.user.id, product, quantity });
      await cartItem.save();

      return res.status(201).json({
        message: 'Item added to cart',
        status: true,
        cartItem
      });
    }
  } catch (error) {
    
    console.log(error);
    res.status(500).json({ status: false, message: 'An error occurred', error });
  }
};

exports.getCartItems = async (req, res) => {
  try {
    const cartItems = await CartItem.find().populate('product');
    res.status(200).json({ status: true, cartItems });
  } catch (error) {
    res.status(500).json({ status: false, message: 'An error occurred', error });
  }
};

// Common function for updating and deleting a cart item
async function modifyCartItem(res, action) {
  try {
    const result = await action();

    if (!result) {
      return res.status(404).json({ status: false, message: 'Cart item not found' });
    }

    res.status(200).json({ status: true, message: 'Operation successful', cartItem: result });
  } catch (error) {
    res.status(500).json({ status: false, message: 'An error occurred', error });
  }
}

exports.updateCartItem = async (req, res) => {
  const cartItemId = req.params.cartitemid;
  const { quantity } = req.body;

  await modifyCartItem(res, async () => {
    const cartItem = await CartItem.findById(cartItemId);
    if (!cartItem) {
      return null;
    }
    cartItem.quantity = quantity;
    await cartItem.save();
    return cartItem;
  });
};

exports.deleteCartItem = async (req, res) => {
  const cartItemId = req.params.cartitemid;

  await modifyCartItem(res, async () => {
    const cartItem = await CartItem.findByIdAndRemove(cartItemId);
    return cartItem;
  });
};
