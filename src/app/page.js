import Link from "next/link";
import Carousel from "../components/Carousel";

export default function Home() {
  
  return (
      <div>
        <div className="carousel relative">
        <Carousel />
        <button className="absolute top-[45%] left-[35%] md:top-[47%] md:left-[43%] lg:top-[45%] lg:scale-110 lg:hover:scale-125 bg-orange-400 text-black rounded-lg scale-100 font-bold px-4 py-2 hover:bg-orange-600 hover:scale-110 transition border-black"><Link href={'/products'}>Shop Now</Link></button>
        </div>
      </div>
  );
}
