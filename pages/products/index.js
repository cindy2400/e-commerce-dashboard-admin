import Pagination from "@/components/layout/Pagination";
import SearchBar from "@/components/layout/SearchBar";
import ListProducts from "@/components/products/ListProducts";
import { brands, categories, products } from "@/public/dummy_data";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/Products.module.scss";

const Products = ({ products, brands, categories }) => {
  const router = useRouter();
  const [productsState, setProductState] = useState(products);
  const [searchText, setSearchText] = useState("");
  const [filterBrands, setFilterBrands] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterPriceFrom, setFilterPriceFrom] = useState("");
  const [filterPriceTo, setFilterPriceTo] = useState("");
  const [page, setPage] = useState("");
  const [pageClick, setPageClick] = useState("");
  const [itemPerPage, setItemPerPage] = useState("");
  const [totalItems, setTotalItems] = useState("");

  const { search, brand, category, price_from, price_to } = router.query;

  useEffect(() => {
    if (
      search === undefined &&
      brand === undefined &&
      category === undefined &&
      price_from === undefined &&
      price_to === undefined
    ) {
      return;
    }
    fetch(
      `/api/products?search=${search || ""}&brand=${brand || ""}&category=${
        category || ""
      }&price_from=${price_from || ""}&price_to=${
        price_to || ""
      }&page=${pageClick}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProductState(data.data.products);
        setPage(data.data.page);
        setItemPerPage(data.data.item_per_page);
        setTotalItems(data.data.total_items);
      });
  }, [search, brand, category, price_from, price_to, pageClick]);

  useEffect(() => {
    const url = new URL("https://example.com/products");

    const filterDebounce = setTimeout(() => {
      if (searchText !== "") {
        url.searchParams.append("search", searchText);
      } else {
        url.searchParams.delete("search");
      }

      if (filterBrands !== "") {
        url.searchParams.append("brand", filterBrands);
      } else {
        url.searchParams.delete("brand");
      }

      if (filterCategory !== "") {
        url.searchParams.append("category", filterCategory);
      } else {
        url.searchParams.delete("category");
      }

      if (filterPriceFrom !== "") {
        url.searchParams.append("price_from", filterPriceFrom);
      } else {
        url.searchParams.delete("price_from");
      }

      if (filterPriceTo !== "") {
        url.searchParams.append("price_to", filterPriceTo);
      } else {
        url.searchParams.delete("price_to");
      }

      router.push(url.pathname + url.search);
    }, 500);

    return () => clearTimeout(filterDebounce);
  }, [
    searchText,
    filterBrands,
    filterCategory,
    filterPriceFrom,
    filterPriceTo,
  ]);

  const paginateHandler = (pageNumbers) => {
    setPageClick(pageNumbers);
  };

  return (
    <div className={styles.container}>
      <h2>Products</h2>
      <div className={styles["search-filter-container"]}>
        <SearchBar value={searchText} setSearchText={setSearchText} />
        <select
          className={styles.select}
          value={filterBrands}
          onChange={(e) => setFilterBrands(e.target.value)}
        >
          <option value="">All</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
        <select
          className={styles.select}
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">All</option>
          {categories.map((singleCategory) => (
            <option key={singleCategory} value={singleCategory}>
              {singleCategory}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Price from"
          value={filterPriceFrom}
          className={styles.input}
          onChange={(e) => setFilterPriceFrom(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price to"
          value={filterPriceTo}
          className={styles.input}
          onChange={(e) => setFilterPriceTo(e.target.value)}
        />
      </div>

      {productsState.length === 0 ? (
        <h3>No products available</h3>
      ) : (
        <>
          <ListProducts products={productsState} />
          <Pagination
            itemsPerPage={itemPerPage}
            totalItems={totalItems}
            paginateHandler={paginateHandler}
            currentPage={page}
          />
        </>
      )}
    </div>
  );
};

export async function getStaticProps() {
  const initialProducts = products.slice(0, 10);
  const initialBrands = brands;
  const initialCategories = categories;

  return {
    props: {
      products: initialProducts,
      brands: initialBrands,
      categories: initialCategories,
    },
  };
}

export default Products;
