import React from 'react'
import Card from '@/components/Card'

const page = async() => {
    let products=[]
    let errorMessage=""
    try{
        const res=await fetch("http://localhost:3000/api/getAllProducts")
        products=await res.json();
    }
    catch(err){
        console.error("error while fetching data: ",err.message);
        errorMessage=`error while fetching data: ${err.message}`
    }
    


  return (
    <>
      <p
      className='text-white text-3xl md:text-4xl lg:text-6xl animate__animated animate__fadeInLeftBig text-center my-6'
      >
        Products
      </p>

      <div
      className=' grid md:grid-cols-2 lg:grid-cols-4 justify-center items-center py-4 gap-8 animate__animated animate__fadeInRightBig '>
      {
          errorMessage ? <div>
            {errorMessage}
    </div> :
        products?.map((product,index)=>(
          <div
          key={index}
          >
            {
                <Card image={product.img} title={product.title} price={product.price} slug={product._id} />
            }
          </div>
        ))
      }
      </div>
    </>
  )
}

export default page
