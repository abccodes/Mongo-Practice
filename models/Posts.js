const mongoose = require('mongoose');
const authorSchema = require('./Authors');
const createdAtSchema = require('./CreatedAts');

const postSchema = new mongoose.Schema({

    title: String,
    content: String,
    images: [String],

    likes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Like'
    },

    comments: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Comment'
    },

    ...authorSchema.obj,
    ...createdAtSchema.obj
});

//------------------------------------------------


module.exports = mongoose.model('Post', postSchema)