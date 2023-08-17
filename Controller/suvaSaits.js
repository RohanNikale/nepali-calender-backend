const SuvaSaits = require('../Models/suvaSaitsModel');

// Endpoint for creating a new SuvaSaits
exports.createSuvaSaits = async (req, res) => {
    try {
        const userid = req.user.id
        const newSuvaSaits = new SuvaSaits({
            userid, ...req.body
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
    const SuvaSaitsid = req.headers.suvasaitsid;
    console.log(SuvaSaitsid)
    try {
        const findSuvaSaits = await SuvaSaits.findById(SuvaSaitsid);

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
        const SuvaSaitsid = req.headers.suvasaitsid;
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
