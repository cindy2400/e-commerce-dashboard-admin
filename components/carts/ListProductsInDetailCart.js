import styles from "../../styles/List.module.scss";

const ListProductsInDetailCart = ({ products }) => {
  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <th>Product name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Discount Percentage</th>
          <th>Discount Price</th>
        </tr>
        {products.map((product) => {
          return (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.total}</td>
              <td>{product.discountPercentage}</td>
              <td>{product.discountedPrice}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ListProductsInDetailCart;
