const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');



const mongoURI = 'mongodb://localhost:27017/contactsdb'; 

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

const contactSchema = new mongoose.Schema({
    name: {type:String, required: true},
    email: {type: String, required: true }
});

const Contact = mongoose.model('Contact', contactSchema);

const sampleContacts = [
    {name: 'Alice Johnson' , email: 'alice@example.com'},
    {name: 'Bob Smith' , email: 'bob@example.com'},
    {name: 'Erica Kern' , email: 'kern@example.com'},

];

Contact.insertMany(sampleContacts)
.then(() => {
    console.log('Sample contacts inserted');
    mongoose.connection.close();

})

.catch (err => {
    console.error('Error inserting contacts:', err);

});