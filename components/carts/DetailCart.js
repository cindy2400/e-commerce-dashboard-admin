import styles from "../../styles/DetailCart.module.scss";
import ListProductsInDetailCart from "./ListProductsInDetailCart";

const DetailCart = ({ cart }) => {
  return (
    <>
      <h4>Detail</h4>
      <div className={styles.container}>
        <div>
          <p>
            <b>Name :</b> {cart.firstName} {cart.lastName}
          </p>
          <p>
            <b>Total quantity : </b>
            {cart.totalQuantity}
          </p>
          <p>
            <b>Total products : </b>
            {cart.totalProducts}
          </p>
        </div>
        <div>
          <p>
            <b>Username : </b>
            {cart.username}
          </p>
          <p>
            <b>Total price : </b>
            {cart.total}
          </p>
          <p>
            <b>Discounted total : </b>
            {cart.discountedTotal}
          </p>
        </div>
      </div>
      <h4>Products</h4>
      <ListProductsInDetailCart products={cart.products} />
    </>
  );
};

export default DetailCart;
