import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Product from "@/app/model/product";


async function connectDB(){
    await mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Connected to MongoDB")
        return true
    })
    .catch(err=>console.error("error while connecting to database: ",err.message))
}

connectDB();

export async function POST(request){

    try {
        const {slug}=await request.json()    
        const product=await Product.findOne({_id:slug})
        if(product){
            return NextResponse.json(product)
        }else{
            return NextResponse.json({message:"Product not found"})
        }
    } catch (error) {
        return NextResponse.json({"error in get Product: ":error.message})
    }

}