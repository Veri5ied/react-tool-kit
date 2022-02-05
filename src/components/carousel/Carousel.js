import "./style.scss";
import { Carousel } from "3d-react-carousal";
import CardOne from "./carousel-card/card-one/CardOne";
import CardTwo from "./carousel-card/card-two/CardTwo";
import CardThree from "./carousel-card/card-three/CardThree";
import CardFour from "./carousel-card/card-four/CardFour";

let slides = [<CardOne />, <CardTwo />, <CardThree />, <CardFour />];

function CarouselSlider() {
  return (
    <div className="carousel-slider">
      <Carousel
        slides={slides}
        arrows={false}
      />
    </div>
  );
}

export default CarouselSlider;
