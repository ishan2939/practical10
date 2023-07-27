const Notice = require('../models/notice');



/* User functionalities */

/* Get all notices */
exports.getNotices = async (req, res) => {
    try {

        const notices = await Notice.find().populate('publisher', { 'username': 1, _id: 0 });

        return res.status(200).json({ status: 'success', message: 'notices found successfully.', data: JSON.stringify(notices) });

    } catch (err) {
        console.log(err);
        return res.status(400).json({ status: 'error', message: err.message });
    }
};



/* Publisher functionalities */

/* Get perticular notice */
exports.getNoticeById = async (req, res) => {
    try {

        const notice = await Notice.findById(req.params.noticeId);

        return res.status(400).json({ status: 'success', message: 'notice found successfully.', data: notice });

    } catch (err) {
        console.log(err);
        return res.status(400).json({ status: 'error', message: err.message });
    }
};

/* Get perticular publisher notices */
exports.getNoticesByPublisherId = async (req, res) => {
    try {

        const notices = await Notice.find({ publisher: req.params.publisherId }, {"publisher": 0, "updatedAt": 0});

        return res.status(400).json({ status: 'success', message: 'notices found successfully.', data: notices });

    } catch (err) {
        console.log(err);
        return res.status(400).json({ status: 'error', message: err.message });
    }
};

/* Add notice */
exports.addNotice = async (req, res) => {
    try {

        const newNotice = await Notice.create(req.body);
        console.log(newNotice);

        return res.status(400).json({ status: 'success', message: 'notices added successfully.' });

    } catch (err) {
        console.log(err);
        return res.status(400).json({ status: 'error', message: err.message });
    }
};

/* Update notice */
exports.updateNotice = async (req, res) => {
    try {

        const { publisher, ...data } = req.body.notice;

        const newNotice = await Notice.findByIdAndUpdate(req.params.noticeId, data);

        return res.status(400).json({ status: 'success', message: 'notices updated successfully.' });

    } catch (err) {
        console.log(err);
        return res.status(400).json({ status: 'error', message: err.message });
    }
};

/* Delete notice */
exports.deleteNotice = async (req, res) => {
    try {

        const newNotice = await Notice.findByIdAndDelete(req.params.noticeId)

    } catch (err) {
        console.log(err);
        return res.status(400).json({ status: 'error', message: err.message });
    }
};


/* Add like */

exports.addLike = async(req, res) => {
    try{

        const notice = await Notice.findById(req.params.noticeId);

        if(!notice)
            throw new Error("No such notice exists");

        if(notice.likes.includes(req.body.userId))
            return res.status(200).send();
        
        await Notice.findByIdAndUpdate(req.params.noticeId, {$push: { likes: req.body.userId}}, {new: true});

        return res.status(200).json({ status: 'success', message: 'Like added successfully.' });
    }catch(err){
        console.log(err);
        return res.status(400).json({ status: 'error', message: err.message });
    }
};


exports.removeLike = async(req, res) => {
    try{

        const notice = await Notice.findById(req.params.noticeId);

        if(!notice)
            throw new Error("No such notice exists");

        await Notice.findByIdAndUpdate(req.params.noticeId, {$pull: { likes: req.body.userId}}, {new: true});

        return res.status(200).json({ status: 'success', message: 'Like removed successfully.' });
    }catch(err){
        console.log(err);
        return res.status(400).json({ status: 'error', message: err.message });
    }
};