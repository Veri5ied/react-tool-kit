import "./style.scss";

function SecondaryButton({
  buttonText,
  linkUrl,
  width,
  height,
  onClick,
  style,
  className,
  borderRadius,
  border,
  padding,
  margin,
}) {
  return (
    <div className="secondary">
      <a href={linkUrl}>
        <button
          className={`secondary__btn ${className}`}
          style={{
            width,
            height,
            borderRadius,
            border,
            padding,
            margin,
            ...style,
          }}
          onClick={onClick}
        >
          {buttonText}
        </button>
      </a>
    </div>
  );
}

export default SecondaryButton;
