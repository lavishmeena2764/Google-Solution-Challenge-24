import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cards from "./Card";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
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
export default function Categorycarousel(){
    return (
      <Carousel
        swipeable={false}
        draggable={false}
        arrows={false}
        autoPlay={true}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={2000}
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
