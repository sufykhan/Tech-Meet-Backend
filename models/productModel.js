import mongoose from "mongoose"

const productSchema=mongoose.Schema({
    name:{
       type:String,
       required:true
   }, 
   calories:{
    type:String,
    
   },
   image:{
    type:String,
    required:true
}, 
vendors:[{
    type:String,
    required:true
}], 
price:[{
    type:String,
    required:true
}], 

})
const Product=mongoose.model("Product",productSchema)

export default Product;