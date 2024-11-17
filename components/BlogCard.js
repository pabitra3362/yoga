'use client'
import React, {useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BlogCard = ({
    className='',
    src,
    title,
    button,
    id
}) => {

    const router=useRouter()
    const [error, setError] = useState(null)
    
    const handleDelete=async() => {
      try {
        const response=await axios.post("http://localhost:3000/api/blog/deleteBlog",{id})
        toast.success(await response.data.message)
      } catch (error) {
        setError(error.message)
      }
    }
    

  return (
    
    <div className={className}>
        {error && <div>{error}</div>}
        <ToastContainer />
      <div className="img">
            <Image 
            className='rounded-lg h-64'
            src={src}
            alt={title}
            width={300}
            height={200} />
            </div>
            <hr />
            <div className="title">
              <h2 className='text-xl text-white'>{title}</h2>
            </div>
            <div 
            className={`py-2 flex ${button ? "justify-between px-3" : "justify-center"} items-center`} 
            >
              <button
              onClick={()=>router.push(`/blogs/${id}`)}
              className='btn btn-outline btn-accent font-bold'
              >
                Show More
              </button>

              {button && 
              <button
              onClick={handleDelete}
              className='btn btn-outline btn-error font-bold'
              >
                Delete
            </button>}
            </div>
    </div>
  )
}

export default BlogCard
