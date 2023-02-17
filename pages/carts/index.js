import ListCarts from "@/components/carts/ListCarts";
import styles from "../../styles/Carts.module.scss";

const Carts = ({ carts }) => {
  return (
    <div className={styles.container}>
      <ListCarts carts={carts} />
    </div>
  );
};

export default Carts;

export async function getStaticProps() {
  const carts = await fetch("https://dummyjson.com/carts");
  const cartsResponse = await carts.json();
  const cartsData = cartsResponse.carts;

  const user = await fetch("https://dummyjson.com/users/?limit=100");
  const userResponse = await user.json();
  const userData = userResponse.users;

  const cartsAndUserData = cartsData.map((cart) => ({
    ...userData.find((user) => user.id === cart.userId),
    ...cart,
  }));

  return {
    props: {
      carts: cartsAndUserData,
    },
  };
}
