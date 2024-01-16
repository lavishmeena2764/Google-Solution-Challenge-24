import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cards from "./Card";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
export default function Categorycarousel(){
    return (
      <Carousel
        swipeable={false}
        draggable={false}
        autoPlay={true}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="flex flex-col justify-center items-center">
          <Cards name={"General Physician"} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Cards name={"Gynaec"} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Cards name={"Ortho"} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Cards name={"Cardio"} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Cards name={"Opth"} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Cards name={"Ost"} />
        </div>
      </Carousel>
    );
}
