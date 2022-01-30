import "./style.scss";

function NormalText({ children, className, style }) {
  return (
    <p className={`normal__text ${className}`} style={style}>
      {children}
    </p>
  );
}

export default NormalText;
