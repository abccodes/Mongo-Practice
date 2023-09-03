const mongoose = require('mongoose');

const createdAtSchema = new mongoose.Schema({ 
    
    createdAt: { 
        type: Date,
        default: () => Date.now()
    }
});

const CreatedAt = mongoose.model('CreatedAt', createdAtSchema);
module.exports = CreatedAt;