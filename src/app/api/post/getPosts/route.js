"use server"
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Post from "@/app/model/post";

async function connectDB() {
    await mongoose.connect(process.env.MONGODB_URI)
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
            const posts = await Post.find({})
            if(posts){
                return NextResponse.json({message:posts})        
            }else{
                return NextResponse.json({message:"Didn't find any post"})
            }
        } catch (error) {
            return NextResponse.json({"error while getting posts: ":error.message})
        }
    }
}