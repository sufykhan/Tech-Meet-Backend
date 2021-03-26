import mongoose from "mongoose"
const orderSchema=mongoose.Schema({
customer:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:"Customer"
},
customerName:{
    type:String
},
cartItems:[
    {
        name:{type:String,required:true},
        image:{type:String,required:true},
        calories:{type:String},
        pri:{type:String,required:true},
        qty:{type:String,required:true},
        selectedvendor:{type:String,required:true},
        product:{type:mongoose.Schema.Types.ObjectId,required:true,ref:"Product"},
    }
]
},{
    timestamps:true
})

const Order=mongoose.model("Order",orderSchema)

export default Order;

