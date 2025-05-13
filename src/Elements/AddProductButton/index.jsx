import cls from './AddProductButton.module.scss';

const AddProductButton = () => {
  return (
    <div className={cls.add__product__button}>
      <button>+ Add Product</button>
    </div>
  );
};

export default AddProductButton;
