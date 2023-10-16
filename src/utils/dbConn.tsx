require('dotenv').config();
const mongoose = require("mongoose");
const db_link = process.env.DB_Link;
const dbConnect= async () =>{
    try {
        await mongoose.connect(db_link);
        console.log("DB Connected");   
    } catch (error) {
        console.log(error);
        
    }
}

export default dbConnect