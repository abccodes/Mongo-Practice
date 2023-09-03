const mongoose = require('mongoose');
const authorSchema = require('./Authors');
const createdAtSchema = require('./CreatedAts');

const commentSchema = new mongoose.Schema({

    content: String,
    
    likes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Like'
    },

    replies: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Comment'
    },

    ...authorSchema.obj,
    ...createdAtSchema.obj
})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;