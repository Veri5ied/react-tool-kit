import "./style.scss";
import TestImage from "../test-image.png";

const CarouselCard = ({}) => {
  return (
    <div className="carousel__card">
      <div className="carousel__body">
        <div className="carousel__image">
          <img src={TestImage} alt="author__img" />
        </div>
        <div className="carousel__content">
          <p className="quote">
            Start your project quickly with our fast matching system. Get
            matched with talents that fit you perfectly within a short
            time.Start your project quickly with our fast matching system.
          </p>
          <div className="profile">
            <p className="profile-head">Timothy Agrena</p>
            <p className="profile-title">C.E.O Leil&bey</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
