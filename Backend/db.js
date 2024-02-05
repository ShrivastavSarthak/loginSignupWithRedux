const mongoose =require("mongoose");

const dburi="mongodb+srv://sharthak:20112002@cluster0.dzez59p.mongodb.net/user"


const connectToDb =()=>{
    mongoose.connect(dburi).then(
        ()=>{
            console.log("Connected to database");
        }
    )
}


module.exports = connectToDb