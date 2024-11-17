import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Post from "../../../model/post";


async function connectDB() {
    await mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log("Connected to MongoDB")
            return true
        })
        .catch(err => console.error("error while connecting to database: ", err.message))
}

connectDB();

export async function POST(request) {

    try {
        const data =await request.json()
        const result = await Post.updateOne(
            { _id: data.slug },
            {
                $set:
                {
                    img: data.img,
                }
            })
        
        if (result) {
            return NextResponse.json({ message: "Post Updated" })
        } else {
            return NextResponse.json({ message: "Failed to update post" })
        }
    } catch (error) {
        return NextResponse.json({ "error in update Post: ": error.message })
    }

}