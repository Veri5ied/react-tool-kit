import CarouselCard from "../CarouselCard";
import TestImage from "../../test-image.png";

function CardFour() {
  return (
    <div className="carousel-card">
      <CarouselCard
        imgUrl={TestImage}
        quote="Start your project quickly with our fast matching system. Get
            matched with talents that fit you perfectly within a short
            time.Start your project quickly with our fast matching system."
        title="Alvin Okoro"
        stack="Frontend Engineer"
      />
    </div>
  );
}

export default CardFour;
