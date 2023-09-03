const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    title: String,
    content: String,
    images: [String],

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    likes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Like'
    },

    comments: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Comment'
    },

    createdAt: {
        type: Date,
        default: () => Date.now()
    },

});

//------------------------------------------------


module.exports = mongoose.model('Post', postSchema)