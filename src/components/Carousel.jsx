import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cards from "./Card";
import "./Carousel.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
  },
};
const sliderImageUrl = [
  {
    name: "Cardiology",
    url: "https://www.nm.org/-/media/northwestern/healthbeat/images/health%20library/nm-ten-signs-cardiologist_preview.jpg",
    link:"/user/heart"
  },
  {
    name: "Diabetes",
    url: "https://d18yrmqbzi0q7a.cloudfront.net/wp-content/uploads/diabetes-symptoms-and-treatment.jpg",
    link:"/user/diabetes"
  },
  {
    name: "Nephrology",
    url: "https://my.clevelandclinic.org/-/scassets/images/org/health/articles/24214-nephrologist",
    link:"/user/kidney"
  },
  {
    name: "Obs/Gyn",
    url: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/2329605.jpg",
    link:"/user/pregnancy"
  },
  {
    name: "Neurology",
    url: "https://www.shutterstock.com/image-photo/brain-surgeon-neurologist-doctor-explaining-260nw-1754977193.jpg",
    link:"/user/alziemer"
  }
];
const Slider = () => {
  return (
    <div className="parent my-16">
      <div className="text-center py-4">
        <p className="text-3xl font-800 ">Services</p>
        <p className="text-xl md:text-2xl font-400 text-stone-500 pb-8 pt-4">
          We offer
        </p>
      </div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        autoPlaySpeed={2000}
        showDots={true}
        draggable={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div
              className="slider flex items-center justify-center"
              key={index}
            >
              <Cards name={imageUrl.name} img={imageUrl.url} link={imageUrl.link}/>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
{
  /*  <img src={imageUrl.url} alt="movie" /> */
}
