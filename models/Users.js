const mongoose = require('mongoose');
const createdAtSchema = require('./CreatedAts');

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

userSchema.statics.findByName = function (name) {
    return this.where({ name: new RegExp(name, 'i')});
}

module.exports = mongoose.model('User', userSchema);






