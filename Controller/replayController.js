const Replay = require('../Models/replayModel');

// Reusable function to modify a Replay
const modifyReplay = async (req, res, action) => {
    try {
        const ReplayId = req.params.replayid;
        const findReplay = await Replay.findById(ReplayId);

        if (!findReplay) {
            return res.status(404).json({ status: false, message: 'Replay not found' });
        }

        if (!(req.user.id === findReplay.userId)) {
            return res.status(403).json({ status: false, message: 'Access denied.' });
        }

        const result = await action(ReplayId, req.body);

        res.status(200).json({ status: true, message: 'Operation successful', result });
    } catch (error) {
        res.status(500).json({ status: false, message: 'An error occurred', error });
    }
};

// Create Replay
exports.createReplay = async (req, res) => {
    try {
        const commentid = req.body.commentId;
        if (!commentid) {
            return res.status(400).json({ status: false, message: 'Please provide commentid in the request body' });
        }

        const newReplay = new Replay({
            commentid: commentid,
            userId: req.user.id,
            ...req.body
        });

        await newReplay.save();

        res.status(201).json({
            message: 'Successfully created Replay',
            status: true,
            Replay: newReplay
        });
    } catch (error) {
        res.status(500).json({ status: false, message: 'An error occurred', error });
    }
};


// Get Replay by ID
exports.getReplayById = async (req, res) => {
    try {
        const ReplayId = req.params.replayid;
        const findReplay = await Replay.findById(ReplayId);

        if (!findReplay) {
            return res.status(404).json({ status: false, message: 'Replay not found' });
        }

        res.status(200).json({ status: true, Replay:findReplay });
    } catch (error) {
        res.status(500).json({ status: false, message: 'An error occurred', error });
    }
};

// Get All Replays for a Product

exports.getReplayList = async (req, res) => {
    try {
        const commentid = req.params.commentid;
        const findReplay = await Replay.find({commentId:commentid});

        if (!findReplay) {
            return res.status(404).json({ status: false, message: 'Replays not found' });
        }

        res.status(200).json({ status: true, Replays:findReplay });
    } catch (error) {
        console.log(error)
        res.status(500).json({ status: false, message: 'An error occurred', error });
    }
};

// Update Replay
exports.updateReplay = async (req, res) => modifyReplay(req, res, async (ReplayId, updateData) => {
    return await Replay.findByIdAndUpdate(ReplayId, {edited:true,...updateData}, { new: true });
})

// Delete Replay
exports.deleteReplay = async (req, res) => modifyReplay(req, res, async (ReplayId) => {
    return await Replay.findByIdAndDelete(ReplayId);
});

