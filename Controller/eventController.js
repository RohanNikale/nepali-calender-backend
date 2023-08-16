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
