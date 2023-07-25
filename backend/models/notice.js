const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true,
        trim: true,
        min: 5
    },
    description: { 
        type: String, 
        required: true,
        trim: true,
        min: 5
    },
    publisher: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user"
    },
    type: {
        type: String,
        enum: ['class', 'exam', 'event', 'holiday', 'general', 'academic', 'sports', 'scholarship', 'meeting'],
        default: 'general'
    }
}, {timestamps: true});

module.exports = mongoose.model("notice", noticeSchema);