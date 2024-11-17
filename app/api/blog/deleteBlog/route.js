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
        const {id}=await request.json()
        const result=await Blog.deleteOne({_id:id})
        if(result){
            return NextResponse.json({message:"Blog Deleted"})
        }else{
            return NextResponse.json({message:"Failed to delete blog"})
        }
    } catch (error) {
        return NextResponse.json({"error in delete Blog: ":error.message})
    }

}