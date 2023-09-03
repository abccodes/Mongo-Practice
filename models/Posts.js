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

postSchema.statics.findByTitle = function (title) { 
    return this.where({ title: new RegExp(title, 'i')});
}

postSchema.statics.getLikes = async function (postId, type) {

    const Like = this.model('Like');

    try {

        const likes = await Like.find({
            'entity._id': postId,
            'entity.kind': 'Post',
            'type': type == true ? 'Like' : 'Dislike'
        });

        return likes;

    } catch (error) {
        console.error(error);
        throw error;
    }
}



module.exports = mongoose.model('Post', postSchema)