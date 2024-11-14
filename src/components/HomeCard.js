import React from 'react'
import Link from 'next/link'

const HomeCard = ({img,title,description}) => {
    return (
        <div>
            <div className="card card-compact mx-auto bg-base-100 w-80 shadow-xl">
                <figure
                >
                    <img
                    className='h-96'
                        src={img}
                        alt={title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <Link href="/products">
                        <button className="btn btn-primary">
                            Shop Now
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCard
