const Horoscope = require('../Models/horoscopeModel');

// Endpoint for creating a new horoscope
exports.createHoroscope = async (req, res) => {
    try {
        const {
            userId,
            pageTitle: { nepali: pageTitleNepali, english: pageTitleEnglish },
            viewMode,
            title: { nepali: titleNepali, english: titleEnglish },
            fetureImg,
            startingLetter: { nepali: startingLetterNepali, english: startingLetterEnglish },
            description: { nepali: descriptionNepali, english: descriptionEnglish },
            video,
            luckyNumber: { nepali: luckyNumberNepali, english: luckyNumberEnglish },
            luckyColor: { nepali: luckyColorNepali, english: luckyColorEnglish },
            luckyDays: { nepali: luckyDaysNepali, english: luckyDaysEnglish },
            luckyStone: { nepali: luckyStoneNepali, english: luckyStoneEnglish },
        } = req.body;

        const newHoroscope = new Horoscope({
            userId,
            pageTitle: { nepali: pageTitleNepali, english: pageTitleEnglish },
            viewMode,
            title: { nepali: titleNepali, english: titleEnglish },
            fetureImg,
            startingLetter: { nepali: startingLetterNepali, english: startingLetterEnglish },
            description: { nepali: descriptionNepali, english: descriptionEnglish },
            video,
            luckyNumber: { nepali: luckyNumberNepali, english: luckyNumberEnglish },
            luckyColor: { nepali: luckyColorNepali, english: luckyColorEnglish },
            luckyDays: { nepali: luckyDaysNepali, english: luckyDaysEnglish },
            luckyStone: { nepali: luckyStoneNepali, english: luckyStoneEnglish },
        });

        await newHoroscope.save();

        res.status(201).json({
            message: 'Successfully created horoscope',
            status: true
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

// Base function for updating and deleting a horoscope
async function modifyHoroscope(req, res, action) {
    const horoscopeId = req.headers.horoscopeid;

    try {
        const findHoroscope = await Horoscope.findById(horoscopeId);

        if (!findHoroscope) {
            return res.status(404).json({ status: false, message: 'Horoscope not found' });
        }

        const result = await action(horoscopeId, req.body);

        if (!result) {
            return res.status(404).json({ status: false, message: 'Horoscope not found' });
        }

        res.status(200).json({ status: true, message: 'Operation successful', result });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ status: false, message: 'An error occurred' });
    }
}

// Endpoint for updating a horoscope
exports.updateHoroscope = (req, res) => modifyHoroscope(req, res, async (horoscopeId, data) => {
    return await Horoscope.findByIdAndUpdate(horoscopeId, data, { new: true });
});

// Endpoint for deleting a horoscope
exports.deleteHoroscope = (req, res) => modifyHoroscope(req, res, async (horoscopeId) => {
    return await Horoscope.findByIdAndDelete(horoscopeId);
});

// Endpoint for getting horoscope data
exports.getHoroscopeData = async (req, res) => {
    try {
        const horoscopeId = req.headers.horoscopeid;
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
