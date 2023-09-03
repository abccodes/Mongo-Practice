const mongoose = require('mongoose');

//-----------------------------------------------

const createdAtSchema = new mongoose.Schema({ 
    
    createdAt: { 
        type: Date,
        default: () => Date.now()
    }
});

const CreatedAt = mongoose.model('CreatedAt', createdAtSchema);

//-----------------------------------------------

const authorSchema = new mongoose.Schema({

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Author = mongoose.model('Author', authorSchema);

//-----------------------------------------------

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    

    posts: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Post'
    },

    ...createdAtSchema.obj
});

const User = mongoose.model('User', userSchema);

//-----------------------------------------------

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

const Post = mongoose.model('Post', postSchema);

//-----------------------------------------------

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

//-----------------------------------------------

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

//-----------------------------------------------






