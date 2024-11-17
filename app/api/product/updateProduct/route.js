import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Product from "../../../model/product";


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
        
        
        const result = await Product.updateOne(
            { _id: data.slug },
            {
                $set:
                {
                    img: data.img,
                    title: data.title,
                    price: data.price,
                    description: data.description,
                    uses: data.uses,
                    stock: data.stock
                }
            })
        
        if (result) {
            return NextResponse.json({ message: "Product Updated" })
        } else {
            return NextResponse.json({ message: "Failed to update product" })
        }
    } catch (error) {
        return NextResponse.json({ "error in update Product: ": error.message })
    }

}