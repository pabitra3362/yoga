import mongoose from "mongoose";

const postSchema= new mongoose.Schema({
    
    img:{
        required:true,
        type:String
    }
    
})


const Post = mongoose.models.post || mongoose.model('post',postSchema)
export default Post;