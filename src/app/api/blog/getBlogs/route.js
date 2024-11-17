"use server"
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Blog from "@/app/model/blog";

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
            const blogs = await Blog.find({})
            if(blogs){
                return NextResponse.json({message:blogs})        
            }else{
                return NextResponse.json({message:"Didn't find any blog"})
            }
        } catch (error) {
            return NextResponse.json({"error while getting blogs: ":error.message})
        }
    }
}