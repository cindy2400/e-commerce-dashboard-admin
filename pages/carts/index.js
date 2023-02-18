import ListCarts from "@/components/carts/ListCarts";
import Pagination from "@/components/layout/Pagination";
import { useMemo, useState } from "react";
import styles from "../../styles/Carts.module.scss";

const Carts = ({ carts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cartsPerPage = 10;

  const indexOfLastCart = useMemo(
    () => currentPage * cartsPerPage,
    [currentPage]
  );

  const indexOfFirstCart = useMemo(
    () => indexOfLastCart - cartsPerPage,
    [indexOfLastCart]
  );

  const currentCarts = useMemo(
    () => carts.slice(indexOfFirstCart, indexOfLastCart),
    [indexOfFirstCart, indexOfLastCart, carts]
  );

  const paginateHandler = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };

  return (
    <div className={styles.container}>
      <h2>Carts</h2>
      <ListCarts carts={currentCarts} />
      <Pagination
        itemsPerPage={cartsPerPage}
        totalItems={carts.length}
        paginateHandler={paginateHandler}
        currentPage={currentPage}
      />
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
