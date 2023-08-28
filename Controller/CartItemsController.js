const CartItem = require('../Models/cartItemModel');

exports.addItemToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const check=await cartItem.find(productId)
    if(check){
      cartItem.quantity = quantity;
      await cartItem.save();
      return res.status(200).json({status:true,message:"Item added to cart"})
    }
    const cartItem = new CartItem({ userId:req.user.id ,productId, quantity });
    await cartItem.save();

    res.status(201).json({
      message: 'Item added to cart',
      status: true,
      cartItem
    });
  } catch (error) {
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
