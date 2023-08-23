const Product = require('../Models/productModel'); // Import the Product model
const upload = require('../Config/multerSetup');

// Endpoint for creating a new product
exports.createProduct = [
    upload.array('images'), // Use `array` for uploading multiple images
    async (req, res) => {
        try {
            const imagesArray = req.files.map(file => file.path);

            const newProduct = new Product({
                productMedia: {
                    images: imagesArray,
                    YTvideoLink: req.body.YTvideoLink
                },
                productName: req.body.productName,
                productTitle: {
                    nepali: req.body.productTitle.nepali,
                    english: req.body.productTitle.english
                },
                description: req.body.description,
                productPrice: req.body.productPrice,
                phoneNumber: req.body.phoneNumber
            });

            await newProduct.save();

            res.status(201).json({
                message: 'Successfully created product',
                status: true
            });
        } catch (error) {
            res.status(500).json(error);
        }
    }
];

async function modifyProduct(req, res, action) {
    const productid = req.params.productid;
    try {
        const findproduct = await product.findById(productid);
        if (!findproduct) {
            return res.status(404).json({ status: false, message: 'product not found' });
        }

        const result = await action(productid, req.body);

        if (!result) {
            return res.status(404).json({ status: false, message: 'product not found' });
        }

        res.status(200).json({ status: true, message: 'Operation successful', result });
    } catch (error) {
        console.log(error)
        res.status(500).json({ status: false, message: 'An error occurred', error });
    }
}

// Endpoint for updating a product
exports.updateProduct = (req, res) => modifyProduct(req, res, async (productId, data) => {
    return await Product.findByIdAndUpdate(productId, data);
});

// Endpoint for deleting a product
exports.deleteProduct = (req, res) => modifyProduct(req, res, async (productId) => {
    return await Product.findByIdAndDelete(productId);
});

// Endpoint for getting product data
exports.getProductData = async (req, res) => {
    try {
        const productid = req.params.productid;

        if (!productid) {
            return res.status(400).json({ status: false, message: 'product id are required' });
        }

        const ProductData = await Product.findById(productid);

        if (!ProductData) {
            return res.status(404).json({ status: false, message: 'Product data not found' });
        }

        res.status(200).json({ status: true, ProductData });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, message: 'An error occurred', error });
    }
};
