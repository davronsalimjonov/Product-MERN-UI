import cls from './ProductCard.module.scss';

const ProductCard = ({ product }) => {
  return (
    <div className={cls.product__card}>
      <img src={product.productImage} alt={product.productName} className={cls.product__image} />
      <div className={cls.product__info}>
        <h3>{product.productName}</h3>
        <p>Size: {product.size}</p>
        <p>${product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;