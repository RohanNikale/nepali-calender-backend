const mongoose=require('mongoose')
require("dotenv").config();

const connection=mongoose.connect(process.env.DB_URI)
.then(()=>{
    console.log('connection succeful')
}).catch((e)=>{
    console.log('somthing wrong with mongodb connection')
})