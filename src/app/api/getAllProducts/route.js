"use server"
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Product from '../../model/product'

async function connectDB() {
    await mongoose.connect("mongodb://localhost:27017/Products")
    .then(()=>{
        console.log("connected successfully")
        return true
    })
    .catch(err=>console.log("error while connecting to database: ",err.message))
}

connectDB();

export async function GET(request) {
    if(connectDB){
        try {
            const products = await Product.find({})
            return NextResponse.json(products)        
        } catch (error) {
            return NextResponse.json({"error while inserting products: ":error.message})
        }
    }
}