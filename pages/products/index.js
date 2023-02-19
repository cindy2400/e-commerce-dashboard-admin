import Pagination from "@/components/layout/Pagination";
import SearchBar from "@/components/layout/SearchBar";
import ListProducts from "@/components/products/ListProducts";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/Products.module.scss";

const Products = ({ products }) => {
  const [productsState, setProductState] = useState(products);
  const [searchText, setSearchText] = useState(null);
  const [filterBrands, setFilterBrands] = useState("");
  const router = useRouter();
  const { page, search } = router.query;
  const productsPerPage = 10;
  const skip = ((page || 1) - 1) * productsPerPage;

  useEffect(() => {
    if (search === undefined && page === undefined) return;
    if ((search === undefined || search === "") && page !== undefined) {
      fetch(
        `https://dummyjson.com/products?limit=${productsPerPage}&skip=${skip}`
      )
        .then((res) => res.json())
        .then((data) => setProductState(data.products));
      return;
    }
    fetch(
      `https://dummyjson.com/products/search?q=${search}&limit=${productsPerPage}&skip=${skip}`
    )
      .then((res) => res.json())
      .then((data) => setProductState(data.products));
  }, [search, page]);

  useEffect(() => {
    if (searchText === null) return;
    const searchTimeout = setTimeout(() => {
      if (searchText === "") {
        router.push(`/products`);
        setProductState(products);
      } else {
        router.push(`/products?search=${searchText}`);
      }
    }, 500);
    return () => clearTimeout(searchTimeout);
  }, [searchText]);

  const paginateHandler = (pageNumbers) => {
    if (search !== undefined) {
    }
    router.push(`/products?page=${pageNumbers}`);
  };

  const brands = ["a", "b", "c", "d", "e"];

  const changeFilterBrandsHandler = (e) => {
    setFilterBrands(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h2>Products</h2>

      <div className={styles["search-filter-container"]}>
        <SearchBar setSearchText={setSearchText} />
        <select
          className={styles.select}
          value={filterBrands}
          onChange={changeFilterBrandsHandler}
        >
          <option value="ALL">All</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <ListProducts products={productsState} />
      <Pagination
        itemsPerPage={productsPerPage}
        totalItems={100}
        paginateHandler={paginateHandler}
        currentPage={page}
      />
    </div>
  );
};

export async function getStaticProps() {
  const products = await fetch("https://dummyjson.com/products?limit=10");
  const dataProducts = await products.json();

  return {
    props: {
      products: dataProducts.products,
    },
  };
}

export default Products;
