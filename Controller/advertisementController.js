const Advertisement = require('../models/advertisementModel'); // Import the Advertisement model
const upload = require('../Config/multerSetup');

// Endpoint for creating a new Advertisement with multiple images/videos
exports.createAdvertisement = [
    upload.array('imageOrVideoFiles', 5),
    async (req, res) => {
        console.log(req.body)
        try {
            
            // const imageOrVideoFilesPaths = (req.files).map(file => `\\${file.path}`);
            const newAdvertisement = new Advertisement({
                // imageOrVideo: imageOrVideoFilesPaths,
                ...req.body
            });

            await newAdvertisement.save();

            res.status(201).json({
                message: 'Successfully created Advertisement',
                status: true
            });
        } catch (error) {
            console.log(error)
            res.status(500).json(error);
        }
    }
];

// Base function for updating and deleting an Advertisement
async function modifyAdvertisement(req, res, action) {
    const advertisementId = req.params.advertisementid;
    try {
        const findAdvertisement = await Advertisement.findById(advertisementId);
        
        if (!findAdvertisement) {
            return res.status(404).json({ status: false, message: 'Advertisement not found' });
        }

        const result = await action(advertisementId, req.body);

        if (!result) {
            return res.status(404).json({ status: false, message: 'Advertisement not found' });
        }

        res.status(200).json({ status: true, message: 'Operation successful', result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, message: 'An error occurred', error });
    }
}

// Endpoint for updating an Advertisement
exports.updateAdvertisement = (req, res) => modifyAdvertisement(req, res, async (advertisementId, data) => {
    return await Advertisement.findByIdAndUpdate(advertisementId, data, { new: true });
});

// Endpoint for deleting an Advertisement
exports.deleteAdvertisement = (req, res) => modifyAdvertisement(req, res, async (advertisementId) => {
    return await Advertisement.findByIdAndDelete(advertisementId);
});

// Endpoint for getting Advertisement data
exports.getAdvertisementData = async (req, res) => {
    try {
        const advertisementid = req.params.advertisementid;

        if (!advertisementid) {
            return res.status(400).json({ status: false, message: 'please provide id are required' });
        }
        const AdvertisementData = await Advertisement.findById(advertisementid);

        if (!AdvertisementData) {
            return res.status(404).json({ status: false, message: 'Advertisement data not found' });
        }

        res.status(200).json({ status: true, AdvertisementData });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, message: 'An error occurred', error });
    }
};

exports.getAdvertisementList = async (req, res) => {
    try {

        const AdvertisementData = await Advertisement.find({accept:true,status:'active'});

        if (!AdvertisementData) {
            return res.status(404).json({ status: false, message: 'Advertisements data not found' });
        }

        res.status(200).json({ status: true, AdvertisementData });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, message: 'An error occurred', error });
    }
};
