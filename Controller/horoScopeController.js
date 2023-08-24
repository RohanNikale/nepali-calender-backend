const Horoscope = require('../Models/horoscopeModel');
const upload = require('../Config/multerSetup');

// Endpoint for creating a new horoscope with image upload
exports.createHoroscope = [
    upload.single('fetureImg'),
    async (req, res) => {
        try {
            const userId = req.user.id;

            const newHoroscope = new Horoscope({
                userId,
                ...req.body,
                fetureImg: `\\${req.file.path}`
            });

            await newHoroscope.save();

            res.status(201).json({
                message: 'Successfully created horoscope',
                status: true
            });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ status: false, message: 'An error occurred' });
        }
    }
];

// Endpoint for updating a horoscope
exports.updateHoroscope = async (req, res) => {
    const horoscopeId = req.params.horoscopeid;
    try {
        const findHoroscope = await Horoscope.findById(horoscopeId);
        if (!(findHoroscope.userId == req.user.id)) {
            return res.status(404).json({
                success: false,
                message: 'Access denied.',
            })
        }
        if (!findHoroscope) {
            return res.status(404).json({ status: false, message: 'Horoscope not found' });
        }

        const updatedHoroscope = await Horoscope.findByIdAndUpdate(horoscopeId, req.body, { new: true });

        if (!updatedHoroscope) {
            return res.status(404).json({ status: false, message: 'Horoscope not found' });
        }

        res.status(200).json({ status: true, message: 'Operation successful', result: updatedHoroscope });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ status: false, message: 'An error occurred' });
    }
};

// Endpoint for deleting a horoscope
exports.deleteHoroscope = async (req, res) => {
    const horoscopeId = req.params.horoscopeid;


    try {
        const findHoroscope = await Horoscope.findById(horoscopeId);
        if (!findHoroscope) {
            return res.status(404).json({ status: false, message: 'Horoscope not found' });
        }

        await Horoscope.findByIdAndDelete(horoscopeId);

        res.status(200).json({ status: true, message: 'Horoscope deleted successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ status: false, message: 'An error occurred' });
    }
};

// Endpoint for getting horoscope data
exports.getHoroscopeData = async (req, res) => {
    const horoscopeId = req.params.horoscopeid;


    try {
        const horoscope = await Horoscope.findById(horoscopeId);

        if (!horoscope) {
            return res.status(404).json({ status: false, message: 'Horoscope not found' });
        }

        res.status(200).json({ status: true, horoscope });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ status: false, message: 'An error occurred' });
    }
};

exports.getHoroscopeList = async (req, res) => {

    try {
        const horoscope = await Horoscope.find();

        if (!horoscope) {
            return res.status(404).json({ status: false, message: 'Horoscope not found' });
        }

        res.status(200).json({ status: true, horoscope });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ status: false, message: 'An error occurred' });
    }
};
