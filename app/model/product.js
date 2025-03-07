import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  uses: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true
  }
});

const Product = mongoose.models.Product || mongoose.model("Product",productSchema);

export default Product