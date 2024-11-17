import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Post from "@/app/model/post";


async function connectDB(){
    await mongoose.connect("mongodb://localhost:27017/Products")
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
        const post=await Post.findOne({_id:slug})
        if(post){
            return NextResponse.json({message:post})
        }else{
            return NextResponse.json({message:"Post not found"})
        }
    } catch (error) {
        return NextResponse.json({"error in get single Post: ":error.message})
    }

}