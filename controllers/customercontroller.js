import mongoose from "mongoose"
import asyncHandler from "express-async-handler"
import Customer from "../models/customerModel.js"


export const getCustomer = asyncHandler(async(req,res)=>{
    const customer=await Customer.find({})
    res.json(customer)
})


export const getCustomerById=asyncHandler(async(req,res)=>{
    const customer=await Customer.findById(req.params.id)
    if(customer){
        res.json(customer)
    }
    else{
        res.status(404)
        throw new Error("Error")
    }
})

export const updateCustomer=async(req,res)=>{
    const {id}=req.params;
    const val=req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send("No Customer Found")
    try{
    const updatedCustomer= await Customer.findByIdAndUpdate(id,val,{new:true})
    res.status(200).json(updatedCustomer)
    }
    catch(error){
        console.log(error)
    }
    
}

export const deleteCustomer=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send("No Customer Found")
    try{
        await Customer.findByIdAndDelete(id)
        res.json({message:"Customer Deleted Succesfully"})
        }
    catch(error){
        console.log(error)
    }
    
}

export const addCustomer=async(req,res)=>{
    const customerData=req.body;
    const newCustomer=new Customer(customerData)
    try{
        newCustomer.save()
        res.status(201).json(newCustomer)
        }
    catch(error){
        console.log(error)
    }
    
}