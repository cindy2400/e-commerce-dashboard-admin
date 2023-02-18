import Pagination from "@/components/layout/Pagination";
import ListProducts from "@/components/products/ListProducts";
import { useEffect, useMemo, useState } from "react";
import styles from "../../styles/Carts.module.scss";

const Products = ({ products }) => {
  const [productsState, setProductState] = useState(products);
  const [searchText, setSearchText] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    if (searchText === null) return;
    const searchTimeout = setTimeout(() => {
      fetch(`https://dummyjson.com/products/search?q=${searchText}`)
        .then((res) => res.json())
        .then((data) => setProductState(data.products));
    }, 500);
    return () => clearTimeout(searchTimeout);
  }, [searchText]);

  const indexOfLastProduct = useMemo(
    () => currentPage * productsPerPage,
    [currentPage]
  );

  const indexOfFirstProduct = useMemo(
    () => indexOfLastProduct - productsPerPage,
    [indexOfLastProduct]
  );

  const currentProducts = useMemo(
    () => productsState.slice(indexOfFirstProduct, indexOfLastProduct),
    [indexOfFirstProduct, indexOfLastProduct, productsState]
  );

  const paginateHandler = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <ListProducts products={currentProducts} />
      <Pagination
        itemsPerPage={productsPerPage}
        totalItems={productsState.length}
        paginateHandler={paginateHandler}
      />
    </div>
  );
};

export async function getStaticProps() {
  const products = await fetch("https://dummyjson.com/products?limit=100");
  const dataProducts = await products.json();

  return {
    props: {
      products: dataProducts.products,
    },
  };
}

export default Products;
