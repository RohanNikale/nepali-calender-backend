const Horoscope = require('../Models/horoScopeModel');
const upload = require('../Config/multerSetup');

// Endpoint for creating a new horoscope with image and audio file uploads
exports.createHoroscope = [
    upload.fields([
        { name: 'fetureImg', maxCount: 1 },
        { name: 'audioFile', maxCount: 1 }
    ]),
    async (req, res) => {
        try {
            const uploadedImage = req.files['fetureImg'] ? req.files['fetureImg'][0] : null;
            const uploadedAudio = req.files['audioFile'] ? req.files['audioFile'][0] : null;
            
            const userId = req.user.id;

            const newHoroscope = new Horoscope({
                userId,
                pageTitle: {
                    nepali: req.body.pageTitleNepali,
                    english: req.body.pageTitle,
                },
                selectedHoroscope:req.body.selectedHoroscope,
                horoscopeDisplay: req.body.horoscopeDisplay,
                fetureImg: uploadedImage,
                audioFile: uploadedAudio,
                horoscopeVideoLink: req.body.horoscopeVideoLink,
                startingLetter: {
                    nepali: req.body.startingLetterNepali,
                    english: req.body.startingLetter,
                },
                description: {
                    nepali: req.body.description,
                    english: req.body.descriptionNepali,
                },
                luckyNumber: {
                    nepali: req.body.luckyNumber,
                    english: req.body.luckyNumberNepali,
                },
                luckyColor: {
                    nepali: req.body.luckyColor,
                    english: req.body.luckyColorNepali,
                },
                luckyDays: {
                    nepali: req.body.luckyDaysNepali,
                    english: req.body.luckyDays,
                },
                luckyStone: {
                    nepali: req.body.luckyStoneNepali,
                    english: req.body.luckyStone,
                },
                rulingPlanet: {
                    nepali: req.body.rulingPlanetNepali,
                    english: req.body.rulingPlanet,
                },
                Symbol: {
                    nepali: req.body.SymbolNepali,
                    english: req.body.Symbol,
                },
                Element: {
                    nepali: req.body.ElementNepali,
                    english: req.body.Element,
                },
                luckyDetails: req.body.luckyDetails, // Corrected reference
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
        if (!(req.user.adminAccess)) {
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
    const type = req.params.type;
    try {
        const horoscope = await Horoscope.find({horoscopeDisplay:type});

        if (!horoscope) {
            return res.status(404).json({ status: false, message: 'Horoscope not found' });
        }

        res.status(200).json({ status: true, horoscope });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ status: false, message: 'An error occurred' });
    }
};
