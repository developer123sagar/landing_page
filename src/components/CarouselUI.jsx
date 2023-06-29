import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselUI = (props) => {
  const { slideImages, width, height, indicator, status } = props;
  return (
    <>
      <Carousel
        className={`w-full lg:w-[${width}] lg:h-[${height}]`}
        showStatus={status}
        showIndicators={indicator}
        autoPlay
        infiniteLoop
        showThumbs={false}
      >
        {slideImages.map((img, id) => (
          <div key={`${img}.${id}`}>
            <img src={img} alt="menus" className="object-contain" />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default CarouselUI;
