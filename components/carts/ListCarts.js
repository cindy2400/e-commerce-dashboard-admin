import Link from "next/link";
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
        </tr>
        {carts.map((carts) => {
          return (
            <tr key={carts.id}>
              <td>
                <Link href={`/carts/${carts.id}`}>
                  <button className={styles["button-detail"]}>
                    {carts.firstName} {carts.lastName}
                  </button>
                </Link>
              </td>
              <td>{carts.total}</td>
              <td>{carts.discountedTotal}</td>
              <td>{carts.totalProducts}</td>
              <td>{carts.totalQuantity}</td>
              {/* <td>
                <Link href={`/carts/${carts.id}`}>Detail</Link>
              </td> */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ListCarts;
