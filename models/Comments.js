const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({

    content: String,

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    
    likes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Like'
    },

    replies: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Comment'
    },

    createdAt: {
        type: Date,
        default: () => Date.now()
    }
});


module.exports = mongoose.model('Comment', commentSchema);