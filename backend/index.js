const express = require('express');
const path =  require('path');
const cookieParser = require('cookie-parser');

require('./config/database').connect_to_DB();/* connect to DB*/

const app = express();/* use express */

const router = require('./routes/routes');

app.use(express.json());

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));


app.use('/', router);

/* if user enters wrong path */
app.use('*',(req, res) => {
    res.res.status(400).json({status: 'error', message: 'Invalid path'});
});

/* start server */
app.listen(3000, () => {
    console.log("Server started at port 3000...");
});