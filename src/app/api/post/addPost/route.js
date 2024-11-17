import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Post from "@/app/model/post";


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
        const data=await request.json()
        const result=await Post.create(data)
        await result.save()
        if(result){
            return NextResponse.json({message:"Post Added",status:200})
        }else{
            return NextResponse.json({message:"Failed to add post",status:404})
        }
    } catch (error) {
        return NextResponse.json({"error in add Post: ":error.message})
    }

}