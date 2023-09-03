const mongoose = require('mongoose');
const postSchema = require('./Post');
const createdAtSchema = require('./CreatedAt');

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

module.exports = User;






