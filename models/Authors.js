const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;

