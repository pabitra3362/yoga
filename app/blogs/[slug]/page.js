import Image from "next/image"
import Link from "next/link"
import axios from "axios"


export default async function Page({ params }) {
    let blog = {}
    let errorMessage = ""
    const slug = (await params).slug

    try {
       const res=await axios.post("http://localhost:3000/api/blog/getSingleBlog",{slug})
        blog=await res.data.message
    } catch (error) {
        errorMessage = error.message
    }


    return (
        <div>
            {errorMessage ?
                <div>{errorMessage}</div>
                :
                <div className="grid justify-center items-center p-3">
                    <div className="grid justify-center items-center w-[90vw] lg:w-[60vw] gap-3">

                        <div className="img mt-7 flex justify-center items-center">
                            <Image
                                className="w-[90vw] lg:w-[60vw] lg:h-[50vh]"
                                src={blog.img}
                                alt={blog.title}
                                width={250}
                                height={250}
                            />
                        </div>
                        <div className="title">
                            <h2 className="text-white text-2xl font-bold">{blog.title}</h2>
                        </div>
                        
                        <hr />
                        <div className="content">
                            <p className="text-white font-sans lg:text-lg">{blog.content}</p>
                        </div>
                        <div className="flex justify-center items-center">
                        <Link href={'/blogs'}>
                            <button className="btn btn-outline btn-accent w-[90vw] lg:w-[30vw] font-bold">Go Back</button>
                        </Link>
                        </div>

                    </div>
                </div>
            }
        </div>
    )
}