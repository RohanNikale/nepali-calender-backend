const mongoose=require('mongoose')
require("dotenv").config();

const connection=mongoose.connect("mongodb+srv://testrohan:ThlKdJBr535CK9mr@test.56wfp7o.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('connection succeful')
}).catch((e)=>{
    console.log('somthing wrong with mongodb connection')
})