function Card({children, className}) {
  return <div className={`rounded-lg ${className}`}>
    {children}
  </div>;
}

export default Card;
