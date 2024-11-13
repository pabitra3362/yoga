import React from 'react'
import Image from 'next/image'
import Button from './DetailButton'

const Card = ({ image, title, price }) => {
    return (
        <div className='grid justify-center items-center'>
            {
                image && (
                    <div className='border border-white bg-white p-3 w-[320px] lg:w-[370px] h-[620px] rounded-lg grid grid-cols-1 justify-center items-center gap-4'>

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

                        <p className='text-black'>{title}</p>

                        <p className='text-black'>Price: {price}</p>

                        <div className='text-black bg-slate-900 rounded-lg flex justify-center items-center'>
                            <Button />
                        </div>

                    </div>
                )
            }
        </div>

    )
}

export default Card
