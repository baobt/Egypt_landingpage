function ProductCard({ name, sub, image, className = '' }) {
  return (
    <article className={`product-card ${className}`.trim()}>
      <img src={image} alt={name} />
      <div className="product-card__overlay" />
      <div className="product-card__content">
        <h3>{name}</h3>
        {sub ? <p>{sub}</p> : null}
      </div>
    </article>
  );
}

export default ProductCard;
