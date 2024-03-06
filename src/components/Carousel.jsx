import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cards from "./Card";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Categorycarousel() {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      arrows={false}
      autoPlay={true}
      responsive={responsive}
      infinite={true}
      autoPlaySpeed={1500}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={1000}
      containerClass="carousel-container"
      itemClass="carousel-item-padding-40-px"
    >
      <div className="flex flex-col justify-center items-center">
        <Cards
          name={"Gynaecology"}
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9xKfM5ADy9NVd1LRQh_F9B1RK3_Y0_n8bOQ&usqp=CAU"
          }
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Cards
          name={"Orthopaedics"}
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9xKfM5ADy9NVd1LRQh_F9B1RK3_Y0_n8bOQ&usqp=CAU"
          }
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Cards
          name={"Cardiology"}
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9xKfM5ADy9NVd1LRQh_F9B1RK3_Y0_n8bOQ&usqp=CAU"
          }
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Cards
          name={"Dermatology"}
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9xKfM5ADy9NVd1LRQh_F9B1RK3_Y0_n8bOQ&usqp=CAU"
          }
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Cards
          name={"Nephrology"}
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9xKfM5ADy9NVd1LRQh_F9B1RK3_Y0_n8bOQ&usqp=CAU"
          }
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Cards
          name={"Neurology"}
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9xKfM5ADy9NVd1LRQh_F9B1RK3_Y0_n8bOQ&usqp=CAU"
          }
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Cards
          name={"Gastroentrology"}
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9xKfM5ADy9NVd1LRQh_F9B1RK3_Y0_n8bOQ&usqp=CAU"
          }
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Cards
          name={"Physician"}
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9xKfM5ADy9NVd1LRQh_F9B1RK3_Y0_n8bOQ&usqp=CAU"
          }
        />
      </div>
    </Carousel>
  );
}

export default function Carousels() {
  return (
    <div>
      <main className="flex flex-col font-serif mt-12">
        <br></br>
        <div className="text-center py-4">
          <p className="text-3xl font-800 ">Services</p>
          <p className="text-xl md:text-2xl font-400 text-stone-500 pb-8 pt-4">
            We offer
          </p>
        </div>
        <Categorycarousel />
        <br></br>
      </main>
    </div>
  );
}
