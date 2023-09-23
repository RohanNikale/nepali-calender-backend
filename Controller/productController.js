const Product = require('../Models/productModel');
const upload = require('../Config/multerSetup');
const business =require('../Models/businessModel')
// Endpoint for creating a new product
exports.createProduct = [
    upload.array('Productimages'),
    async (req, res) => {
        try {
            const findBusiness=await business.findOne({userId:req.user.id})
            if(!findBusiness){
                return res.status(404).json({
                    status:false,
                    message:'please create company first'
                })
            }
<<<<<<< HEAD
            // const imagesArray = req.files.map(file => file.path);
=======
            const imagesArray = req.files.map(file => file.path);
>>>>>>> Rating-CRUD
            const newProduct = new Product({
                companyId: findBusiness.id,
                userId:findBusiness.userId,
                productName: req.body.productName,
                productTitle: req.body.productTitle,
                description: req.body.description,
                productMedia: {
                    // Productimages: imagesArray
                },
                YTvideoLink: req.body.YTvideoLink,
                TikTokvideoLink: req.body.TikTokvideoLink,
                websiteLink: req.body.websiteLink,
                productPrice:req.body.productPrice,
                phoneNumber: req.body.phoneNumber
            });

            await newProduct.save();

            res.status(201).json({
                message: 'Successfully created product',
                status: true
            });
        } catch (error) {
            console.log("Error in createProduct", error);
            res.status(500).json(error);
        }
    }
];

// Base function for updating and deleting a product
async function modifyProduct(req, res, action) {
    const productId = req.params.productid;
    try {
        const findProduct = await Product.findById(productId);
        
        if (!findProduct) {
            return res.status(404).json({ status: false, message: 'Product not found' });
        }
        if(!(req.user.id===findProduct.userId)){
            return res.status(404).json({status:false,message:'please login fist'})
        }
        const result = await action(productId, req.body);

        if (!result) {
            return res.status(404).json({ status: false, message: 'Product not found' });
        }

        res.status(200).json({ status: true, message: 'Operation successful', result });
    } catch (error) {
        console.log(error);
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
        const productId = req.params.productid;

        if (!productId) {
            return res.status(400).json({ status: false, message: 'product Id are required' });
        }

        const ProductData = await Product.findById(productId);

        if (!ProductData) {
            return res.status(404).json({ status: false, message: 'Product data not found' });
        }

        res.status(200).json({ status: true, ProductData });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, message: 'An error occurred', error });
    }
};

exports.getProductList = async (req, res) => {
    try {

        const ProductList = await Product.find();

        if (!ProductList) {
            return res.status(404).json({ status: false, message: 'Products data not found' });
        }

        res.status(200).json({ status: true, ProductList });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, message: 'An error occurred', error });
    }
};
