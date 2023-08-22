const Rashifal = require('../Models/rashiFalHoroscope'); // Import the Rashifal model
const upload = require('../Config/multerSetup');

// Endpoint for creating a new Rashifal
exports.createRashifal = [
    upload.single('audioFile'),
    async (req, res) => {
        try {
            const newRashifal = new Rashifal(
                {
                //  audioFile: `${req.file.path},`
                 ...req.body });

            await newRashifal.save();

            res.status(201).json({
                message: 'Successfully created Rashifal',
                status: true
            });
        } catch (error) {
            res.status(500).json(error);
        }
    }
];

// Base function for updating and deleting a Rashifal
async function modifyRashifal(req, res, action) {
    const rashifalId = req.params.rashifalid;
    try {
        const findRashifal = await Rashifal.findById(rashifalId);
        console.log(req.body);
        if (!findRashifal) {
            return res.status(404).json({ status: false, message: 'Rashifal not found' });
        }

        const result = await action(rashifalId, req.body);

        if (!result) {
            return res.status(404).json({ status: false, message: 'Rashifal not found' });
        }

        res.status(200).json({ status: true, message: 'Operation successful', result });
    } catch (error) {
        console.log(error)
        res.status(500).json({ status: false, message: 'An error occurred', error });
    }
}

// Endpoint for updating a Rashifal
exports.updateRashifal = (req, res) => modifyRashifal(req, res, async (rashifalId, data) => {
    return await Rashifal.findByIdAndUpdate(rashifalId, data);
});

// Endpoint for deleting a Rashifal
exports.deleteRashifal = (req, res) => modifyRashifal(req, res, async (rashifalId) => {
    return await Rashifal.findByIdAndDelete(rashifalId);
});

// Endpoint for getting Rashifal data
exports.getRashifalData = async (req, res) => {
    try {
        const { horoscopeName, rashifalType } = req.body;

        if (!horoscopeName || !rashifalType) {
            return res.status(400).json({ status: false, message: 'horoscopeName and rashifalType are required' });
        }
        console.log(req.body)
        const RashifalData = await Rashifal.findOne(req.body);
        console.log(RashifalData);
        if (!RashifalData) {
            return res.status(404).json({ status: false, message: 'Rashifal data not found' });
        }

        res.status(200).json({ status: true, RashifalData });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, message: 'An error occurred', error });
    }
};
