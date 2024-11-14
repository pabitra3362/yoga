import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Product from "@/app/model/product";


async function connectDB() {
    await mongoose.connect("mongodb://localhost:27017/Products")
    .then(()=>{
        console.log("Connected to MongoDB")
        return true
    })
    .catch(err=>console.error("Error while connecting to mongoDB: ",err.message)
    )
}

export async function GET(request) {
    try {
        const result=await Product.find({}).sort({_id:-1}).limit(12)
        if(result){
            return NextResponse.json(result)
        }else{
            return NextResponse.json({"message":"Did't find any result"})
        }
    } catch (error) {
        return NextResponse.json({"error in random products: ":error.message})
    }
}