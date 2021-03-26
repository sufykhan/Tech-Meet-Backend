import asyncHandler from "express-async-handler"
import Customer from "../models/customerModel.js"
import Order from "../models/orderModel.js"
import mongoose from "mongoose"
 
//@desc   Add an Order
//@route   POST /api/orders
//@access    PUBLIC
export const addOrder =asyncHandler(async(req,res)=>{
    try{
    const {order}=req.body
    const Id=await Customer.findById(order.customer)
    //console.log(Id._id)
    const createdOrder=await Order.create({cartItems:order.cartItems,customer:Id._id,customerName:Id.name})
    
    if(createdOrder)
    {
    res.status(201).json(createdOrder)
    }
    else {
        res.status(404)
        throw new Error("No Order placed")  
    }
    }
    catch(error){
        console.log(error)
        res.status(404).json(error)
    }
})


export const getOrder = asyncHandler(async(req,res)=>{
    const product=await Order.find({})
    res.json(product)
})


export const deleteOrder=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send("No Order Found")
    try{
        await Order.findByIdAndDelete(id)
        res.json({message:"Order Deleted Successfully"})
        }
    catch(error){
        console.log(error)
    }
}
    