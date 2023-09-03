const mongoose = require('mongoose');
const User = require('./models/Users');
const { uniqueNamesGenerator, adjectives, colors, animals} = require('unique-names-generator');

//------------------------------------------------


async function connect () {

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mongo-practice');
        console.log('Connected to MongoDB');
    
    } catch (error) {
        console.log(error.message);
    }
}


connect();

// Populate Users: ---------------------------------

async function createUsers (amount) {

    let users = [];

    try {

        for (let i = 0; i < amount; i++) {

            const name = uniqueNamesGenerator({ 
                dictionaries: [adjectives, colors, animals], 
                length: 2, 
                separator: '-' 
            });
            
            const age = Math.floor(
                Math.random() * (100 - 18 +1) + 18
            );
    
            users.push(new User({
                name: name,
                email: name + '@example.com',
                age: age
            }));
        }

        await User.insertMany(users);
        console.log('Users created');

    }  catch (error) {
        console.log(error.message);
    }
} 

async function deleteUsers () {

    try {
        User.deleteMany({});
        console.log('Users deleted');
    } 
    
    catch (error) {
        console.log(error.message);
    }
}

createUsers(5);


//-------------------------------------------------------







