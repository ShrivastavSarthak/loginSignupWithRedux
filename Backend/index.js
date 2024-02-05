const express =require("express");
const bodyParser = require("body-parser");
const port =3000
const connectToDb= require("./db")
const userRouter =require("./routers/userRoute")

const app =express()
connectToDb()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  
    next();
  });

app.use("/",userRouter)

app.listen(port,()=>{
    console.log("connect to port" + port);
})


