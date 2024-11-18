import React from 'react'
import Link from 'next/link';
import axios from 'axios';
import InstagramEmbed from '../../components/InstagramEmbed';


const page = async() => {
  let posts = [];
  let errorMessage = null;

  try { 
    const response = await axios.get('https://yoga2-sage.vercel.app/api/post/getPosts');
    posts = response.data.message;
  } catch (error) {
    errorMessage = error.message;  
  }


  return (
    <div>
      {errorMessage && <div>{errorMessage}</div>}

      <p
        className='text-white text-3xl md:text-4xl lg:text-6xl animate__animated animate__fadeInLeftBig text-center my-6'
      >
        Instagram Posts
      </p>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-3 md:gap-6 md:px-3'>
            {
              posts.map((post,index)=>(
                <div key={index}
                className='grid justify-center items-center px-1 py-3 gap-3'
                >
                  <div><InstagramEmbed postUrl={post.img} /></div>
                  
                  
                </div>
              ))
            }
        </div>

    </div>
  )
}

export default page
