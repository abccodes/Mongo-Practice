const mongoose = require('mongoose');
const authorSchema = require('./Authors');
const createdAtSchema = require('./CreatedAts');

const likeSchema = new mongoose.Schema({

    entity: {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },

        kind: {
            type: String,
            enum: ['Post', 'Comment'],
            required: true
        },
    },

    type: {
        type: String,
        enum: ['Like', 'Dislike'],
        required: true
    },

    ...authorSchema.obj,
    ...createdAtSchema.obj
});

const Like = mongoose.model('Like', likeSchema);
module.exports = Like;