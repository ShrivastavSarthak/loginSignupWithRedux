const mongoose =require("mongoose");
const dburi= "Enter your db url"

const connectToDb =()=>{
    mongoose.connect(dburi).then(
        ()=>{
            console.log("Connected to database");
        }
    )
}


module.exports = connectToDb
