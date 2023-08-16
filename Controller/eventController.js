const Event = require('../Models/eventModel');

exports.createEvent = async (req, res, next) => {
    try{
    let { title, date, eventRepeat, description, toDoList, location, remindBefore, Time } = req.body;
    const userid=req.user.id
        const createingEvent = new Event({
            userid,title, date, eventRepeat, description, toDoList, location, remindBefore, Time
        })
        await createingEvent.save()
        res.status(201).json({
            message: 'succesfuly created event',
            status: true
        });
    }
    catch(error){
        res.status(404).json(error)
    }
};

exports.updateEvent = async (req, res, next) => {
    const { eventid } = req.headers;
    
    try {
        const findEvent = await Event.findById(eventid);
        if (!(findEvent.userid == req.user._id)) {
            return res.status(404).json({ status: false, message: 'this user does not have access to this event' });
        }

        const updatedEvent = await Event.findByIdAndUpdate(eventid, req.body, { new: true });

        if (!updatedEvent) {
            return res.status(404).json({ status: false, message: 'Event not found' });
        }

        res.status(200).json({ status: true, message: 'Document updated successfully', updatedEvent });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ status: false, message: 'An error occurred' });
    }
};
