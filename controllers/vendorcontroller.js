import mongoose from "mongoose"
import asyncHandler from "express-async-handler"
import Vendor from "../models/vendorModel.js"


export const getVendor = asyncHandler(async(req,res)=>{
    const vendor=await Vendor.find({})
    res.json(vendor)
})
export const getVendorById=asyncHandler(async(req,res)=>{
    const vendor=await Vendor.findById(req.params.id)
    if(vendor){
        res.json(vendor)
    }
    else{
        res.status(404)
        throw new Error("Error")
    }
})


export const updateVendor=async(req,res)=>{
    const {id}=req.params;
    const val=req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send("No Vendor Found")
    try{
    const updatedVendor= await Vendor.findByIdAndUpdate(id,val,{new:true})
    res.status(200).json(updatedVendor)
    }
    catch(error){
        console.log(error)
    }
    
}


export const deleteVendor=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send("No Vendor Found")
    try{
        await Vendor.findByIdAndDelete(id)
        res.json({message:"Vendor Deleted Successfully"})
        }
    catch(error){
        console.log(error)
    }
    
}


export const addVendor=async(req,res)=>{
    const vendorData=req.body;
    const newVendor=new Vendor(vendorData)
    try{
        newVendor.save()
        res.status(201).json(newVendor)
        }
    catch(error){
        console.log(error)
    }
    
}