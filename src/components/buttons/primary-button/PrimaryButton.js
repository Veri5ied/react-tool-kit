import "./style.scss";

function PrimaryButton({
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
    <div className="primary">
      <a href={linkUrl}>
        <button
          className={`primary__btn ${className}`}
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

export default PrimaryButton;
