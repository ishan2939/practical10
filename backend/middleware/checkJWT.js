const jwt = require('jsonwebtoken');
const path = require('path');

const dotenv = require('dotenv');

dotenv.config({path: path.join(__dirname, '..', 'config', '.env')});

const User = require('../models/user');

function verifyToken(token){
    return jwt.verify(token, process.env.SECRET_KEY);
}

function getUserType(token){
    const decodedToken = verifyToken(token); //verify the token
    return decodedToken.type;
}

exports.isTokenValid = async (req, res, next) => {
    try{
        const token = req.body.token;   //get token
        if(!token)
            throw Error();

        const user_id = verifyToken(token).user_id; //verify if token is valid

        const user = await User.findOne({_id: user_id}); //if token is valid then check if user is valid

        if(user) //if everything is ok then send valid response
            return res.status(200).json({status: 'valid', message: 'token is valid.'});
        else    //send response that token is invalid
            throw new Error();
    }
    catch(err){
        return res.status(400).json({status: 'Invalid', message: 'Token is not valid.'});
    }

};

//check if user allowed to access login page
exports.isNotLoggedIn = (req, res, next) => {
    const token = req.body.token;   //get token

    try{
        
        if(!token) //if it doesn't exists
            next();
        else
            throw new Error("User is not logged in.");
    }
    catch(err){
        return res.status(400).json({status: 'error', message: err.message});
    }
};

exports.isStudent = (req, res, next) => { 

    try{    
        const token = req.body.token;   //get token

        if(getUserType(token)=='student')
            next();
        else
            throw new Error("Unauthorized access");
    }
    catch(err){ //handle error
        return res.status(400).json({status: 'error', message: err.message});
    }

};

exports.isTeacher = (req, res, next) => { 

    try{    
        const token = req.body.token;   //get token

        if(getUserType(token)=='teacher')
            next();
        else
            throw new Error("Unauthorized access");
    }
    catch(err){ //handle error
        return res.status(400).json({status: 'error', message: err.message});
    }
    
};