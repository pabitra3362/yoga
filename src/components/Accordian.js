import React from 'react'
import Link from 'next/link'


const AccordianPost = () => {

    return (
        <div>
            <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">Product</div>
                    <div className="collapse-content">
                        <Link href={"/admin/product"}>
                        <button className="btn btn-outline btn-accent">Go To Product Control Page</button>
                        </Link>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Blog</div>
                    <div className="collapse-content">
                        <Link href={"/admin/blog"}>
                        <button className="btn btn-outline btn-accent">Go To Blog Control Page</button>
                        </Link>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Instagram Post</div>
                    <div className="collapse-content">
                    <Link href={"/admin/post"}>
                        <button className="btn btn-outline btn-accent">Go To Post Control Page</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccordianPost
