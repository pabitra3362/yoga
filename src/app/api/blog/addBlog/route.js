import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Blog from "@/app/model/blog";


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
        const data=await request.json()
        const result=await Blog.create(data)
        await result.save()
        if(result){
            return NextResponse.json({message:"Blog Added",status:200})
        }else{
            return NextResponse.json({message:"Failed to add blog",status:404})
        }
    } catch (error) {
        return NextResponse.json({"error in add Blog: ":error.message})
    }

}