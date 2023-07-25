const jwt = require('jsonwebtoken');
const path = require('path');

const dotenv = require('dotenv');

dotenv.config({path: path.join(__dirname, '..', 'config', '.env')});

function getUserType(token){
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);  //verify the token
    return decodedToken.type;
}

// exports.isLoggedIn = (req, res, next) => {
//     try{
//         const token = (req.cookies['token'])?req.cookies['token'].token:undefined;   //get token
        
//         if(token) //if it doesn't exists then let user login
//             next();
//         else
//             throw new Error("User is already logged in");
//     }
//     catch(err){
//         return res.status(400).json({status: 'error', message: err.message});
//     }

// };

//check if user allowed to access login page
exports.isNotLoggedIn = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"] || (req.cookies['token'])?req.cookies['token'].token:undefined;   //get token

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
        const token = req.body.token || req.query.token || req.headers["x-access-token"] || (req.cookies['token'])?req.cookies['token'].token:undefined;   //get token

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
        const token = req.body.token || req.query.token || req.headers["x-access-token"] || (req.cookies['token'])?req.cookies['token'].token:undefined;   //get token

        if(getUserType(token)=='teacher')
            next();
        else
            throw new Error("Unauthorized access");
    }
    catch(err){ //handle error
        return res.status(400).json({status: 'error', message: err.message});
    }
    
};