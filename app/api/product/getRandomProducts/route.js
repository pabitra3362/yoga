import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
import Product from '../../../model/product';

// MongoDB connection URL
const MONGO_URI = String(process.env.MONGODB_URI)

// Connect to MongoDB and use persistent connection
async function connectDB() {
  // If mongoose is already connected, return true
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error while connecting to MongoDB: ', err.message);
    throw new Error('Database connection failed');
  }
}

export async function GET(request) {
  try {
    // Ensure DB connection is established before performing any query
    await connectDB();

    // Fetch the 12 most recent products
    const result = await Product.find({}).sort({ _id: -1 }).limit(12);

    // Check if the result is empty
    if (result.length === 0) {
      return NextResponse.json({ message: "Didn't find any result" }, { status: 404 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error.message);
    return NextResponse.json({ error: 'Error in random products: ' + error.message }, { status: 500 });
  }
}
