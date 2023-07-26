const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const path = require('path');

const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '..', 'config', '.env') });

const User = require('../models/user');

exports.login = async (req, res) => {

    try {
        const { username, password } = req.body;   //get username & password

        if (!(username && password)) { //if they don't exist
            throw new Error('not sufficient data provided.');
        }

        const userExists = await User.findOne({ username: username });  //get user with entered username

        if (userExists) {   //if user exists

            if (password == userExists.password) {  //if they match

                const token = jwt.sign( //generate token
                    { user_id: userExists._id, username, type: userExists.type },
                    process.env.SECRET_KEY,
                    { expiresIn: "2d" }
                );

                const user= {_id: userExists._id, username: userExists.username, type: userExists.type};

                return res.status(200).json({ status: 'success', message: 'Logged In successfully.', data: { user: user, token: token } });
            }
            throw new Error('Invalid credentials');
        }
        throw new Error('no such user exists.');
    }
    catch (err) { //handle error
        console.log(err);
        return res.status(400).json({ status: 'error', message: err.message });
    }
};