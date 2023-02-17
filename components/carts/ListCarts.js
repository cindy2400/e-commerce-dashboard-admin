import styles from "../../styles/List.module.scss";

const ListCarts = ({ carts }) => {
  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Total</th>
          <th>Discounted total</th>
          <th>Total products</th>
          <th>Total quantity</th>
          <th>Detail</th>
        </tr>
        {carts.map((carts) => {
          return (
            <tr key={carts.id}>
              <td>
                {carts.firstName} {carts.lastName}
              </td>
              <td>{carts.total}</td>
              <td>{carts.discountedTotal}</td>
              <td>{carts.totalProducts}</td>
              <td>{carts.totalQuantity}</td>
              <td>
                <button>Detail</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ListCarts;
