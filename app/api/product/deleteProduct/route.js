import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Product from "../../../model/product";


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
        const {data}=await request.json()
        const result=await Product.deleteOne({_id:data})
        if(result){
            return NextResponse.json({message:"Product Deleted"})
        }else{
            return NextResponse.json({message:"Failed to delete product"})
        }
    } catch (error) {
        return NextResponse.json({"error in delete Product: ":error.message})
    }

}