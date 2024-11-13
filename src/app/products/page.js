import React from 'react'
import Image from 'next/image'
import Card from '@/components/Card'

const page = () => {

 const products = [
    {
        "img": "https://www.yogikuti.com/wp-content/uploads/2016/05/purple-570x684.jpg",
        "title": "Yoga Blanket (Premium)",
        "price": 1299
    },
    {
        "img": "https://www.yogikuti.com/wp-content/uploads/2024/07/colored-mat-1.jpg",
        "title": "Colored Yoga Mat",
        "price": 899
    },
    {
        "img": "https://www.yogikuti.com/wp-content/uploads/2024/07/yoga-wall-rope-pair-White-570x684.jpg",
        "title": "Wall Rope Pair",
        "price": 499
    },
    {
        "img": "https://www.yogikuti.com/wp-content/uploads/2024/07/yoga-strap-7ft-9ft-Red-570x684.jpg",
        "title": "Cotton Yoga Strap",
        "price": 299
    },
    {
        "img": "https://www.yogikuti.com/wp-content/uploads/2016/08/Chair-4-570x684.jpg",
        "title": "Yoga Tall Chair",
        "price": 1599
    },
    {
        "img": "https://www.yogikuti.com/wp-content/uploads/2019/11/Grey-blanket-4pc-1-570x684.jpg",
        "title": "Yoga Blankets 4pc(Premium)",
        "price": 599
    },
    {
        "img": "https://www.yogikuti.com/wp-content/uploads/2024/07/sit-up-abs-trainer-2-570x684.jpg",
        "title": "Sit up trainer / Abs trainer ( Height adjustable )",
        "price": 1999
    },
    {
        "img": "https://www.yogikuti.com/wp-content/uploads/2024/07/yoga-toe-seperator-5-570x684.jpg",
        "title": "Yoga Toe Separator",
        "price": 899
    },
    {
        "img": "https://www.yogikuti.com/wp-content/uploads/2024/07/yoga-aerial-swing-hammocks-purple-570x684.jpg",
        "title": "Aerial Swing Hammocks",
        "price": 499
    },
    {
        "img": "https://www.yogikuti.com/wp-content/uploads/2024/10/7-570x684.jpg",
        "title": "Bumpy Foam Roller",
        "price": 399
    },
]




  return (
      <div
      className=' grid md:grid-cols-2 lg:grid-cols-4 justify-center items-center py-4 gap-4'>
      {
        products.map((product,index)=>(
          <div
          key={index}
          >
            {
                <Card image={product.img} title={product.title} price={product.price} />
            }
          </div>
        ))
      }
      </div>
  )
}

export default page
