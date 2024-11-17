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
        const {id}=await request.json()
        const result=await Post.deleteOne({_id:id})
        if(result){
            return NextResponse.json({message:"Post Deleted"})
        }else{
            return NextResponse.json({message:"Failed to delete post"})
        }
    } catch (error) {
        return NextResponse.json({"error in delete Post: ":error.message})
    }

}