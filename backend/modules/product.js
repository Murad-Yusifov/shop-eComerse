import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    image:{type:String, require:true}
}, {timestamps:true})

const productModel = mongoose.model('product', productSchema)

export default productModel