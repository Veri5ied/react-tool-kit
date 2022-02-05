import "./style.scss";

const CarouselCard = ({ imgUrl, quote, title, stack }) => {
  return (
    <div className="carousel__card">
      <div className="carousel__body">
        <div className="carousel__image">
          <img src={imgUrl} alt="author__img" />
        </div>
        <div className="carousel__content">
          <p className="quote">{quote}</p>
          <div className="profile">
            <p className="profile-head">{title}</p>
            <p className="profile-title">{stack}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
