import "./scss";

function HeadingText({ children, style, className }) {
  return (
    <p className={`heading__text ${className}`} style={style}>
      {children}
    </p>
  );
}

export default HeadingText;
