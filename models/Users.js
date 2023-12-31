const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    
    posts: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Post'
    },

    createdAt: {
        type: Date,
        default: () => Date.now()
    }
});


module.exports = mongoose.model('User', userSchema);






