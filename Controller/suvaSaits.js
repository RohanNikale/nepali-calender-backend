const SuvaSaits = require('../models/suvaSaitsModel');

// Endpoint for creating a new SuvaSaits
exports.createSuvaSaits = async (req, res) => {
    try {
        const userId = req.user.id
        const newSuvaSaits = new SuvaSaits({
            userId, ...req.body
        });

        await newSuvaSaits.save();

        res.status(201).json({
            message: 'Successfully created SuvaSaits',
            status: true
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

// Base function for updating and deleting an SuvaSaits
async function modifySuvaSaits(req, res, action) {
    const SuvaSaitsid = req.params.suvasaitsid;
    try {
        const findSuvaSaits = await SuvaSaits.findById(SuvaSaitsid);
        if(!(findSuvaSaits.userId==req.user.id)){
            return res.status(404).json({
                success: false,
                message: 'Access denied.',
            })
        }
        if (!findSuvaSaits) {
            return res.status(404).json({ status: false, message: 'SuvaSaits not found' });
        }

        const result = await action(SuvaSaitsid, req.body);

        if (!result) {
            return res.status(404).json({ status: false, message: 'SuvaSaits not found' });
        }

        res.status(200).json({ status: true, message: 'Operation successful', result });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ status: false, message: 'An error occurred' });
    }
}

// Endpoint for updating an SuvaSaits
exports.updateSuvaSaits = (req, res) => modifySuvaSaits(req, res, async (SuvaSaitsid, data) => {
    return await SuvaSaits.findByIdAndUpdate(SuvaSaitsid, data, { new: true });
});

// Endpoint for deleting an SuvaSaits
exports.deleteSuvaSaits = (req, res) => modifySuvaSaits(req, res, async (SuvaSaitsid) => {
    return await SuvaSaits.findByIdAndDelete(SuvaSaitsid);
});

// Endpoint for getting SuvaSaits data
exports.getSuvaSaitsData = async (req, res) => {
    try {
        const SuvaSaitsid = req.params.suvasaitsid;
        const SuvaSaitsData = await SuvaSaits.findById(SuvaSaitsid);

        if (!SuvaSaitsData) {
            return res.status(404).json({ status: false, message: 'SuvaSaits not found' });
        }

        res.status(200).json({ status: true, SuvaSaitsData });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ status: false, message: 'An error occurred' });
    }
};

exports.getSuvaSaitsList = async (req, res) => {
    try {
        const SuvaSaitsList = await SuvaSaits.find();

        if (!SuvaSaitsList) {
            return res.status(404).json({ status: false, message: 'SuvaSaits not found' });
        }

        res.status(200).json({ status: true, SuvaSaitsList });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ status: false, message: 'An error occurred' });
    }
};
