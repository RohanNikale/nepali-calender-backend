const Event = require('../Models/eventModel');

// Endpoint for creating a new event
exports.createEvent = async (req, res) => {
    try {
        if (req.user.adminAccess===undefined) {
            return res.status(404).json({
                message: 'only admin can create event'
            })
        }
        const {
            title, date, eventRepeat, description,
            toDoList, location, remindBefore, Time
        } = req.body;
        const userid = req.user.id
        const newEvent = new Event({
            userid, title, date, eventRepeat, description,
            toDoList, location, remindBefore, Time
        });

        await newEvent.save();

        res.status(201).json({
            message: 'Successfully created event',
            status: true
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

// Base function for updating and deleting an event
async function modifyEvent(req, res, action) {
    const eventid = req.headers.eventid;

    try {
        if (req.user.adminAccess===undefined) {
            return res.status(404).json({
                message: 'only admin can create event'
            })
        }
        const findEvent = await Event.findById(eventid);

        if (!findEvent) {
            return res.status(404).json({ status: false, message: 'Event not found' });
        }

        const result = await action(eventid, req.body);

        if (!result) {
            return res.status(404).json({ status: false, message: 'Event not found' });
        }

        res.status(200).json({ status: true, message: 'Operation successful', result });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ status: false, message: 'An error occurred' });
    }
}

// Endpoint for updating an event
exports.updateEvent = (req, res) => modifyEvent(req, res, async (eventid, data) => {

    return await Event.findByIdAndUpdate(eventid, data, { new: true });
});

// Endpoint for deleting an event
exports.deleteEvent = (req, res) => modifyEvent(req, res, async (eventid) => {
    return await Event.findByIdAndDelete(eventid);
});

// Endpoint for getting event data
exports.getEventData = async (req, res) => {
    try {
        const eventid = req.headers.eventid;
        const event = await Event.findById(eventid);

        if (!event) {
            return res.status(404).json({ status: false, message: 'Event not found' });
        }

        res.status(200).json({ status: true, event });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ status: false, message: 'An error occurred' });
    }
};
