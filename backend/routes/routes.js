const express = require('express');

const authController = require('../controller/authController');

const notice = require('../controller/noticeController');
const checkJWT = require('../middleware/checkJWT');

const Router = express.Router();

/* Login */
Router.route('/login').post(checkJWT.isNotLoggedIn, authController.login);

/* notice controller */
Router.route('/getallnotices').get(checkJWT.isStudent, notice.getNotices);

Router.route('/getnoticebyid/:noticeId').get(checkJWT.isTeacher, notice.getNoticeById);

Router.route('/getpublishernotices/:publisherId').get(checkJWT.isTeacher, notice.getNoticesByPublisherId);

Router.route('/addnotice').post(checkJWT.isTeacher, notice.addNotice);
Router.route('/updatenotice/:noticeId').put(checkJWT.isTeacher, notice.updateNotice);
Router.route('/deletenotice/:noticeId').delete(checkJWT.isTeacher, notice.deleteNotice);


module.exports = Router;    