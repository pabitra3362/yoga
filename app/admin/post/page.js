'use client'
import React,{ useState , useEffect } from 'react'
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import InstagramEmbed from '../../../components/InstagramEmbed';
import { useRouter } from 'next/navigation';


const Page = () => {
  const [posts, setPosts] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const router=useRouter()


  const handleDelete=(post) => {
    try {
      axios.post('http://localhost:3000/api/post/deletePost',{id:post._id})
      .then(res=>toast(res.data.message))
      .catch(err=>toast(err.message))
    } catch (error) {
      toast(error.message)
    }
  }

  useEffect(()=>{
    try { 
      axios.get('http://localhost:3000/api/post/getPosts')
      .then(res=>setPosts(res.data.message))
      .catch(err=>setErrorMessage(err.message))
    } catch (error) {
      errorMessage = error.message;  
    }
  },[])



  return (
    <div>
      {errorMessage && <div>{errorMessage}</div>}
      <ToastContainer theme="dark" />
      <div className='flex justify-between items-center px-4'>
        <div className='left  text-white'>Post Control</div>
        <div className='right'>
          <Link href={'/admin/post/form'}><button className="btn rounded-lg text-white">
            <lord-icon
              src="https://cdn.lordicon.com/sbnjyzil.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#ffffff,secondary:#ffffff"
              style={{ "width": "40px", "height": "40px" }}>
            </lord-icon>
            Add New Post
          </button></Link>
        </div>
      </div>

      <p
        className='text-white text-3xl md:text-4xl lg:text-6xl animate__animated animate__fadeInLeftBig text-center my-6'
      >
        Instagram Posts
      </p>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-3 md:gap-6 rounded-lg md:px-3 my-3'>
            {
              posts.map((post,index)=>(
                <div key={index}
                className='grid justify-center items-center px-1 border border-cyan-300 py-3 gap-3'
                >
                  <div><InstagramEmbed postUrl={post.img} /></div>
                  <hr />
                  <div className='btns py-2 flex justify-between items-center px-3'>
                    <button 
                    onClick={()=>router.push(`/admin/post/${post._id}`)}
                    className='btn btn-outline btn-accent'>
                      Edit
                    </button>

                    <button
                    onClick={()=>handleDelete(post)}
                    className='btn btn-outline btn-error'>
                      Delete
                    </button>
                  </div> 
                </div>
              ))
            }
        </div>

    </div>
  )
}

export default Page
