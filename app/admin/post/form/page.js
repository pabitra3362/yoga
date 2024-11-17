'use client'
import axios from "axios"
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const onSubmit = async(data) => {
    axios.post("http://localhost:3000/api/post/addPost", data)
      .then(res => toast(res.data.message))
      .catch(err => console.log(err.message))
  }


  return (
    <div className="">
      <ToastContainer theme="dark" />
      <div className=" border border-cyan-300 text-white w-[90vw] lg:w-[60vw] mx-auto grid justify-center items-center gap-4 rounded-lg py-3 ">
        <h1 className="text-center text-2xl">Add Post</h1>
        <hr />

        <form
          className="grid justify-center items-center gap-3"
          onSubmit={handleSubmit(onSubmit)}>

          <div className="img">
            <input
              className="w-[80vw] lg:w-[58vw] h-12 px-3 rounded-lg"
              type="text"
              placeholder="Instagram post url..."
              {...register("img", {
                required: {
                  value: true,
                  message: "Link is required"
                },
                pattern: {
                  value: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
                  message: "Please enter a valid image link ex: https.www.domain.com"
                }
              })} />
            {errors.img && <div className="text-red-600">{errors.img.message}</div>}
          </div>

          


          <div className="btns flex justify-center items-center py-2">
            <input
              className="btn btn-outline btn-accent font-bold"
              type="submit" value={"Add Post"} />
          </div>
        </form>
      </div>
    </div>
  )
}
