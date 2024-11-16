import Carousel from "../components/Carousel";
import HomeCard from "@/components/HomeCard";
import Stat from "@/components/Stat";

export default async function Home() {

  let products = [];
  let errorMessage = "";
  try {
    const res = await fetch('http://localhost:3000/api/getRandomProducts')
    products = await res.json();
  }
  catch (error) {
    errorMessage = error.message;
  }



  return (
    <div>
      {/* carousel */}
      <div className="carousel relative">
        <Carousel />
      </div>

      <h2 className="text-white text-3xl md:text-4xl lg:text-6xl animate__animated animate__fadeInLeftBig text-center my-6 ">Best Sells Of The Year </h2>

      {/* Cards */}
      <div className="cards animate__animated animate__fadeInRightBig grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-8 my-4 lg:my-12">
        {errorMessage ?
          <div>{errorMessage}</div>
          :
          products.map((item, index) => (
            <HomeCard key={index} img={item.img} title={item.title} description={item.description} />
          ))
        }
      </div>

      <p
        className="text-white text-3xl md:text-4xl lg:text-6xl animate__animated animate__flipInX text-center my-6"
      >
        People's Love To Our Products
      </p>

      {/* Stats */}
      <div
        className="stats w-full flex justify-center items-center my-4"
      >
        <Stat />
      </div>

    </div>
  );
}
