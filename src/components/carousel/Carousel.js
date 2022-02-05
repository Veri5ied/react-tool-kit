import "./style.scss";
import { Carousel } from "3d-react-carousal";
import CarouselCard from "./carousel-card/CarouselCard"

let slides = [
  <CarouselCard />,
  <img src="https://picsum.photos/800/301/?random" alt="2" />,
  <img src="https://picsum.photos/800/302/?random" alt="3" />,
  <img src="https://picsum.photos/800/303/?random" alt="4" />,
  <img src="https://picsum.photos/800/304/?random" alt="5" />,
];

function CarouselSlider() {
  return (
    <div className="carousel-slider">
      <Carousel slides={slides} />
    </div>
  );
}

export default CarouselSlider;
