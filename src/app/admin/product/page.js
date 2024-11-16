import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


const page = async () => {
  let products = [];
  let errorMessage = "";

  try {
    const res = await fetch("http://localhost:3000/api/getAllProducts")
    products = await res.json()
  } catch (error) {
    erroMessage = error.message
  }

  return (
    <div>
      <div className='flex justify-between items-center px-4'>
        <div className='left  text-white'>Product Control</div>
        <div className='right'>
          <Link href={'/admin/product/form'}><button className="btn rounded-lg text-white">
            <lord-icon
              src="https://cdn.lordicon.com/sbnjyzil.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#ffffff,secondary:#ffffff"
              style={{ "width": "40px", "height": "40px" }}>
            </lord-icon>
            Add New Product
          </button></Link>
        </div>
      </div>

      <p
        className='text-white text-3xl md:text-4xl lg:text-6xl animate__animated animate__fadeInLeftBig text-center my-6'
      >
        Products
      </p>

      <div className='grid justify-center items-center'>
        <div
          className=' grid md:grid-cols-2 lg:grid-cols-4 justify-center items-center py-4 gap-8 animate__animated animate__fadeInRightBig '>
          {
            errorMessage ? <div>
              {errorMessage}
            </div> :
              products?.map((product, index) => (
                <div
                  key={index}
                  className='border border-white bg-white p-3 w-[320px] lg:w-[370px] h-[620px] rounded-lg grid grid-cols-1 justify-center items-center gap-1'
                >
                  <div>
                    <Image
                      className='rounded-lg w-[350px] h-[350px]'
                      src={product.img}
                      alt={product.title}
                      width={350}
                      height={350}
                    />
                  </div>
                  <div className='bg-black h-[2px] opacity-45'></div>

                  <p className='text-black text-lg font-bold'>{product.title}</p>

                  <p className='text-black text-lg font-bold'>Price: {product.price}</p>

                  <div className='btns flex justify-between items-center px-3'>
                    <div className="left">
                      <button className="btn btn-outline btn-info w-28 font-bold">Edit</button>
                    </div>
                    <div className='right'>
                      <button className="btn btn-outline btn-error w-28 font-bold">Delete</button>
                    </div>
                  </div>
                </div>
              ))
          }
        </div>
      </div>
    </div>
  )
}

export default page
