const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true,
        trim: true,
        min: 5
    },
    password: { 
        type: String, 
        required: true,
        trim: true,
        min: 5
    },
    type: {
        type: String,
        enum: ['student', 'teacher'],
        default: 'student'
    }
});

module.exports = mongoose.model("user", userSchema);