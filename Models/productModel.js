const mongoose = require('mongoose');

// Create a Mongoose schema
const productSchema = new mongoose.Schema({
    companyId: {
        type: String,
        required: [true, 'Please provide valid Token']
    },
    userId:{
        type :String ,
        required:true
    },
    productName: {
        type: String,
        required: [true, 'Please enter a name']
    },
    productTitle: {
        type: String,
        required: [true, 'Please enter a title']
    },
    description: {
        type: String,
    },
    productMedia: {
        Productimages: { type: Object }
    },
    YTvideoLink: {
        type: String,
    },
    TikTokvideoLink: {
        type: String,
    },
    websiteLink: {
        type: String
    },
    productPrice: {

        type:Object
    },
    phoneNumber: {
        type: String,
        required: true

    }
}
);

// Create a Mongoose model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
