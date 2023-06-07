const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    price:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true
    },
},{timestamps:true,versionKey:false})
const Product = mongoose.model("Product",ProductSchema)
module.exports = Product