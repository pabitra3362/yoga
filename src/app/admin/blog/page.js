import BlogCard from '@/components/BlogCard';
import React from 'react'
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const page = async() => {
  let blogs = [];
  let errorMessage = null;

  try { 
    const response = await axios.get('http://localhost:3000/api/blog/getBlogs');
    blogs = response.data.message;  
  } catch (error) {
    errorMessage = error.message;  
  }


  return (
    <div>
      <ToastContainer theme="dark" />
      <div className='flex justify-between items-center px-4'>
        <div className='left  text-white'>Blog Control</div>
        <div className='right'>
          <Link href={'/admin/blog/form'}><button className="btn rounded-lg text-white">
            <lord-icon
              src="https://cdn.lordicon.com/sbnjyzil.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#ffffff,secondary:#ffffff"
              style={{ "width": "40px", "height": "40px" }}>
            </lord-icon>
            Add New Blog
          </button></Link>
        </div>
      </div>

      <p
        className='text-white text-3xl md:text-4xl lg:text-6xl animate__animated animate__fadeInLeftBig text-center my-6'
      >
        Blogs
      </p>

      <div className='grid justify-center items-center'>
      
      {errorMessage && <div>{errorMessage}</div>}

      <div
      className='grid md:grid-cols-2 lg:grid-cols-4 justify-center animate__animated animate__fadeInRightBig items-center gap-4 md:gap-10'
      >
      {blogs.length > 0 ? (
        blogs.map((blog, index) => (
          <BlogCard
          key={index}
          className='w-80 border border-cyan-400 rounded-lg grid justify-center items-center bg-transparent backdrop-blur-md gap-3 py-3'
          title={blog.title}
          src={blog.img}
          id={blog._id}
          button={true}
          />
            
        ))
      ) : (
        <p>No blogs available</p> 
      )}
      </div>
    </div>
    </div>
  )
}

export default page
