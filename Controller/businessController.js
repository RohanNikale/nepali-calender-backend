const mongoose = require('mongoose');
const Business = require('../Models/businessModel');

// Endpoint for creating a new business
exports.createBusiness = async (req, res) => {
    try {
        const newBusiness = new Business(
            {
                userId:req.user.id,
            ...req.body});

        await newBusiness.save();

        res.status(201).json({
            message: 'Successfully created business',
            status: true
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

// Base function for updating and deleting a business
async function modifyBusiness(req, res, action) {
    const businessId = req.params.businessid;

    try {
        const findBusiness = await Business.findById(businessId);

        if(!(req.user.id===findBusiness.userId)){
            return res.status(404).json({
                success: false,
                message: 'Access denied.',
            })
        }
        if (!findBusiness) {
            return res.status(404).json({ status: false, message: 'Business not found' });
        }
        const result = await action(businessId, req.body);        
        if (!result) {
            return res.status(404).json({ status: false, message: 'Business not found' });
        }

        res.status(200).json({ status: true, message: 'Operation successful', result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, message: 'An error occurred', error });
    }
}

// Endpoint for updating a business
exports.updateBusiness = (req, res) => modifyBusiness(req, res, async (businessId, data) => {
    return await Business.findByIdAndUpdate(businessId, data, { new: true });
});

// Endpoint for deleting a business
exports.deleteBusiness = (req, res) => modifyBusiness(req, res, async (businessId) => {
    return await Business.findByIdAndDelete(businessId);
});

// Endpoint for getting business data
exports.getBusinessData = async (req, res) => {
    try {
        const businessId = req.params.businessid;

        const business = await Business.findById(businessId);

        if (!business) {
            return res.status(404).json({ status: false, message: 'Business not found' });
        }

        res.status(200).json({ status: true, business });
    } catch (error) {
        res.status(500).json({ status: false, message: 'An error occurred', error });
    }
};
