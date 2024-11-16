'use client'
import { useForm } from "react-hook-form"


export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => {
    console.log(data)
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="paste your image link here..." {...register("img", {required:true})} />


      <input type="text" placeholder="title" {...register("title", { required: true,value:"title can't be empty" })} />
      {errors.title && <span>{errors.message}</span>}


      <input type="submit" />
    </form>
  )
}