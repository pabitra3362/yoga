import Link from "next/link";
import Carousel from "../components/Carousel";
import HomeCard from "@/components/HomeCard";

export default async function Home() {
      
      let products=[];
      let errorMessage="";
      try{
        const res = await fetch('http://localhost:3000/api/getRandomProducts')
        products= await res.json();
      }
      catch(error){
        errorMessage=error.message;
      }
  
  
  return (
      <div>
        <div className="carousel relative">
        <Carousel />
        </div>
        
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-8 my-4 lg:my-12">
          {errorMessage ?
          <div>{errorMessage}</div>
          :
          products.map((item,index)=>(
            <HomeCard key={index} img={item.img} title={item.title} description={item.description} />
          ))
          }
        </div>
      </div>
  );
}
