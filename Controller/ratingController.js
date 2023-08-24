const Rating = require('../Models/ratingModel');

// Create Rating
exports.createRating = async (req, res) => {
  try {
    const productid = req.body.productId
    if (!productid) {
      return res.status(404).json({ status: false, message: 'please provide productid in params' })
    }
    const newRating = new Rating(
      {
        productId: productid,
        userId: req.user.id,
        ...req.body
      }
    );
    await newRating.save();

    res.status(201).json({
      message: 'Successfully created Rating',
      status: true,
      rating: newRating
    });
  } catch (error) {
    res.status(500).json({ status: false, message: 'An error occurred', error });
  }
};

// Get All Ratings
exports.getAllRatings = async (req, res) => {
  const productid = req.params.productid
  try {
    const ratings = await Rating.find({ productId: productid });
    res.status(200).json({ status: true, ratings });
  } catch (error) {
    res.status(500).json({ status: false, message: 'An error occurred', error });
  }
};

// Get Rating by ID
exports.getRatingById = async (req, res) => {
  try {
    const ratingId = req.params.ratingid;
    const rating = await Rating.findById(ratingId);

    if (!rating) {
      return res.status(404).json({ status: false, message: 'Rating not found' });
    }

    res.status(200).json({ status: true, rating });
  } catch (error) {
    res.status(500).json({ status: false, message: 'An error occurred', error });
  }
};

// Update Rating
exports.updateRating = async (req, res) => {
  try {
    const ratingId = req.params.ratingid;
    const updateData = req.body;
    const findRating = await Rating.findById(ratingId);
    if (!findRating) {
      return res.status(404).json({ status: false, message: 'Rating not found' });
    }
    if (!(req.user.id === findRating.userId)) {
      return res.status(403).json({ status: false, message: 'Access denied.' });
    }
    const updatedRating = await Rating.findByIdAndUpdate(ratingId, updateData, { new: true });

    res.status(200).json({ status: true, message: 'Rating updated successfully', rating: updatedRating });
  } catch (error) {
    res.status(500).json({ status: false, message: 'An error occurred', error });
  }
};

// Delete Rating
exports.deleteRating = async (req, res) => {
  try {
    const ratingId = req.params.ratingid;
    const findRating = await Rating.findById(ratingId);
    if (!findRating) {
      return res.status(404).json({ status: false, message: 'Rating not found' });
    }
    if (!(req.user.id === findRating.userId)) {
      return res.status(403).json({ status: false, message: 'Access denied.' });
    }
    const deletedRating = await Rating.findByIdAndDelete(ratingId);

    res.status(200).json({ status: true, message: 'Rating deleted successfully', rating: deletedRating });
  } catch (error) {
    res.status(500).json({ status: false, message: 'An error occurred', error });
  }
};
