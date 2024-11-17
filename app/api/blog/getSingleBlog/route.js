import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Blog from "../../../model/blog";


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
        const blog=await Blog.findOne({_id:slug})
        if(blog){
            return NextResponse.json({message:blog})
        }else{
            return NextResponse.json({message:"Blog not found"})
        }
    } catch (error) {
        return NextResponse.json({"error in get single Blog: ":error.message})
    }

}