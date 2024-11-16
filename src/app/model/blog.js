import mongoose from "mongoose";

const blogSchema= new mongoose.Schema({
    title:{
        required:true,
        type:String
    },
    img:{
        required:true,
        type:String
    },
    content:{
        required:true,
        type:String
    }
})


const Blog = mongoose.models.blog || mongoose.model('blog',blogSchema)
export default Blog;