import styles from "../../styles/ListProducts.module.scss";

const ListProducts = ({ products }) => {
  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <th>Product name</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Category</th>
        </tr>
        {products.map((product) => {
          return (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.brand}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.category}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ListProducts;
