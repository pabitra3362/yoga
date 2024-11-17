
import React from 'react';
import axios from 'axios';
import BlogCard from '@/components/BlogCard';


const Page = async () => {
  let blogs = [];
  let errorMessage = null;

  try {
   
    const response = await axios.get('http://localhost:3000/api/blog/getBlogs');
    blogs = response.data.message;  
  } catch (error) {
    errorMessage = error.message;  
  }

  return (
    <div className='grid justify-center items-center'>
      <h1 className='text-white text-5xl text-center my-4'>Blogs</h1>
      
      {errorMessage && <div>{errorMessage}</div>}

      <div
      className='grid md:grid-cols-2 lg:grid-cols-4 justify-center  items-center gap-4 md:gap-10'
      >
      {blogs.length > 0 ? (
        blogs.map((blog, index) => (
          
          <BlogCard
          key={index}
          className='w-80 border border-cyan-400 rounded-lg grid justify-center items-center bg-transparent backdrop-blur-md gap-3 py-3'
          title={blog.title}
          src={blog.img}
          id={blog._id}
          />
            
        ))
      ) : (
        <p>No blogs available</p> 
      )}
      </div>
    </div>
  );
};

export default Page;
