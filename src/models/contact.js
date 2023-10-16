

const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({

        name : {
            type : String,
        },
        email :{
            type : String,
        },
        phone :{
            type : String,
        },
        message : {
            type : String,
        }
    })

const Connection = mongoose.models.Connection|| mongoose.model('Connection', contactSchema);
module.exports = Connection;