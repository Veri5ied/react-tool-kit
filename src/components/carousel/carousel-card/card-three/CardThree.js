import CarouselCard from "../CarouselCard";
import TestImage from "../../test-image.png";

function CardThree() {
  return (
    <div className="carousel-card">
      <CarouselCard
        imgUrl={TestImage}
        quote="Start your project quickly with our fast matching system. Get
            matched with talents that fit you perfectly within a short
            time.Start your project quickly with our fast matching system."
        title="Samuel Nwoko"
        stack="Backend Engineer"
      />
    </div>
  );
}

export default CardThree;
