import mongoose from "mongoose"
import asyncHandler from "express-async-handler"
import Product from "../models/productModel.js"


export const getProduct = asyncHandler(async(req,res)=>{
    const product=await Product.find({})
    res.json(product)
})


export const getProductById=asyncHandler(async(req,res)=>{
    const product=await Product.findById(req.params.id)
    if(product){
        res.json(product)
    }
    else{
        res.status(404)
        throw new Error("Error")
    }
})


export const updatePrice=async(req,res)=>{
    const {id}=req.params;
    const val=req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send("No Post Found")
    try{
    const updatedPost= await Product.findByIdAndUpdate(id,val,{new:true})
    res.status(200).json(updatedPost)
    }
    catch(error){
        console.log(error)
    }
    
}


export const deleteProduct=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send("No Post Found")
    try{
        await Product.findByIdAndDelete(id)
        res.json({message:"Product Deleted Succesfully"})
        }
    catch(error){
        console.log(error)
    }
    
}


export const addProduct=async(req,res)=>{
    const postData=req.body;
    const newProduct=new Product(postData)
    try{
        newProduct.save()
        res.status(201).json(newProduct)
        }
    catch(error){
        console.log(error)
    }
    
}
