'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Card = ({ image, title, price, slug }) => {

    const router=useRouter()

    return (
        <div className='grid justify-center items-center'>
            {
                image && (
                    <div className='border border-white bg-white p-3 w-[320px] lg:w-[370px] h-[620px] rounded-lg grid grid-cols-1 justify-center items-center gap-1'>

                        <div className='img'>
                            <Image
                                className='rounded-lg w-[350px] h-[350px]'
                                src={image}
                                alt={title || "Default Image"}
                                width={350}
                                height={350}
                            />
                        </div>


                        <div className='bg-black h-[2px] opacity-45'></div>

                        <p className='text-black text-lg font-bold'>{title}</p>

                        <p className='text-black text-lg font-bold'>Price: {price}</p>
                       
                        <button
                        onClick={()=>router.push(`/product/${slug}`)}
                        className="btn btn-outline btn-primary font-bold text-lg"
                        >
                        Show Details
                        </button>
                        
                    </div>
                )
            }
        </div>

    )
}

export default Card
