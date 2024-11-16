import Image from "next/image"
import Link from "next/link"


export default async function Page({ params }) {
    let product = {}
    let errorMessage = ""
    const slug = (await params).slug

    try {
        const response = await fetch("http://localhost:3000/api/getSingleProduct",
            {
                method: "POST",
                body: JSON.stringify({slug}),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
        product = await response.json()
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
                                src={product.img}
                                alt={product.title}
                                width={250}
                                height={250}
                            />
                        </div>
                        <div className="title">
                            <h2 className="text-white text-2xl font-bold">{product.title}</h2>
                        </div>
                        <div className="price">
                            <h3 className="text-white text-2xl font-bold">Price: {product.price}</h3>
                        </div>
                        <div className="price">
                            <p className="text-white text-2xl font-bold">Stock: {product.stock}</p>
                        </div>
                        <div className="description">
                            <p className="text-white font-sans md:text-xl">Description: {product.description}</p>
                        </div>
                        <hr />
                        <div className="uses">
                            <p className="text-white font-sans text-xl">Uses: {product.uses}</p>
                        </div>
                        <div className="flex justify-center items-center">
                        <Link href={'/products'}>
                            <button className="btn btn-outline btn-accent w-[90vw] lg:w-[30vw] font-bold">Go Back</button>
                        </Link>
                        </div>

                    </div>
                </div>
            }
        </div>
    )
}