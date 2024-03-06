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
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*",
  },
  {
    name: "Gastroentrology",
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*",
  },
  {
    name: "Neurology",
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
  },
  {
    name: "Dermatology",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU",
  },

  {
    name: "Orthopaedics",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU",
  },
  {
    name: "Obs/Gyn",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU",
  },
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
              <Cards name={imageUrl.name} img={imageUrl.url} />
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
