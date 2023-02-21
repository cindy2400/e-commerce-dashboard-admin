import { useRouter } from "next/router";
import styles from "../../styles/List.module.scss";

const ListCarts = ({ carts }) => {
  const router = useRouter();

  const onTableRowClickHandler = (cartId) => {
    router.push(`/carts/${cartId}`);
  };

  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Total</th>
          <th>Discounted total</th>
          <th>Total products</th>
          <th>Total quantity</th>
        </tr>
        {carts.map((cart) => {
          return (
            <tr
              key={cart.id}
              className={styles["tr-hover"]}
              onClick={() => onTableRowClickHandler(cart.id)}
            >
              <td>
                {cart.firstName} {cart.lastName}
              </td>
              <td>{cart.total}</td>
              <td>{cart.discountedTotal}</td>
              <td>{cart.totalProducts}</td>
              <td>{cart.totalQuantity}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ListCarts;
