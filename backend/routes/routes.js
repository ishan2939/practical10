const express = require('express');

const authController = require('../controller/authController');

const notice = require('../controller/noticeController');
const checkJWT = require('../middleware/checkJWT');

const Router = express.Router();

/* Login */
Router.route('/login').post(checkJWT.isNotLoggedIn, authController.login);

/* If token is valid */
Router.route('/istokenvalid').post(checkJWT.isTokenValid);

/* notice controller */
Router.route('/getallnotices').get(notice.getNotices);

Router.route('/getnoticebyid/:noticeId').get(checkJWT.isTeacher, notice.getNoticeById);

Router.route('/getpublishernotices/:publisherId').get(checkJWT.isTeacher, notice.getNoticesByPublisherId);

Router.route('/addnotice').post(checkJWT.isTeacher, notice.addNotice);
Router.route('/updatenotice/:noticeId').put(checkJWT.isTeacher, notice.updateNotice);
Router.route('/deletenotice/:noticeId').delete(checkJWT.isTeacher, notice.deleteNotice);


Router.route('/addlike/:noticeId').post(notice.addLike);
Router.route('/removelike/:noticeId').post(notice.removeLike);

module.exports = Router;    