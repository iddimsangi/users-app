function Button({ children }) {
  return (
    <button className="ui left labeled icon button right floated">
      {children}
      <i className="left arrow icon"></i>
    </button>
  );
}

export default Button;
