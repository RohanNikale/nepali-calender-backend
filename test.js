const Event = require('../models/eventModel');

// Endpoint for creating a new event
exports.createEvent = async (req, res) => {
    try {
        const {
            title, date, eventRepeat, description,
            toDoList, location, remindBefore, Time
        } = req.body;

        const userid = req.user.id;

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
    try {
        const { eventid } = req.headers;
        const findEvent = await Event.findById(eventid);

        if (!findEvent || findEvent.userid.toString() !== req.user._id.toString()) {
            return res.status(404).json({ status: false, message: 'Access denied' });
        }

        // Perform the specified action (update or delete)
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
exports.updateEvent = async (req, res) => {
    const updateAction = async (eventid, data) => {
        return await Event.findByIdAndUpdate(eventid, data, { new: true });
    };

    modifyEvent(req, res, updateAction);
};

// Endpoint for deleting an event
exports.deleteEvent = async (req, res) => {
    const deleteAction = async (eventid) => {
        return await Event.findByIdAndDelete(eventid);
    };

    modifyEvent(req, res, deleteAction);
};
