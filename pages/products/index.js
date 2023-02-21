import Dropdown from "@/components/layout/Dropdown";
import Input from "@/components/layout/Input";
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

  const { search, brand, category, price_from, price_to, page } = router.query;

  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState("");
  const [totalItems, setTotalItems] = useState("");

  const [searchText, setSearchText] = useState("");
  const [filterBrands, setFilterBrands] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterPriceFrom, setFilterPriceFrom] = useState("");
  const [filterPriceTo, setFilterPriceTo] = useState("");

  useEffect(() => {
    setSearchText(search || "");
    setFilterBrands(brand || "");
    setFilterCategory(category || "");
    setFilterPriceFrom(price_from || "");
    setFilterPriceTo(price_to || "");

    if (
      search === undefined &&
      brand === undefined &&
      category === undefined &&
      price_from === undefined &&
      price_to === undefined &&
      page === 1
    ) {
      return;
    }
    fetch(
      `/api/products?search=${search || ""}&brand=${brand || ""}&category=${
        category || ""
      }&price_from=${price_from || ""}&price_to=${price_to || ""}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProductState(data.data.products);
        setCurrentPage(data.data.page);
        setItemPerPage(data.data.item_per_page);
        setTotalItems(data.data.total_items);
      });
  }, [search, brand, category, price_from, price_to, page]);

  useEffect(() => {
    const searchTimeout = setTimeout(() => {
      if (searchText === "") {
        router.push("/products");
      } else {
        router.push(`/products?search=${searchText}`);
      }
    }, 500);
    return () => clearTimeout(searchTimeout);
  }, [searchText]);

  useEffect(() => {
    if (
      search === undefined &&
      filterBrands === "" &&
      filterCategory === "" &&
      filterPriceFrom === "" &&
      filterPriceTo === "" &&
      currentPage === ""
    ) {
      return;
    }
    const url = new URL("https://example.com/products");

    const filterDebounce = setTimeout(() => {
      if (search !== undefined) {
        url.searchParams.append("search", search);
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

      if (currentPage !== "") {
        url.searchParams.append("page", currentPage);
      } else {
        url.searchParams.delete("page");
      }

      router.push(url.pathname + url.search);
    }, 500);

    return () => clearTimeout(filterDebounce);
  }, [
    search,
    filterBrands,
    filterCategory,
    filterPriceFrom,
    filterPriceTo,
    currentPage,
  ]);

  const paginateHandler = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };

  return (
    <div className={styles.container}>
      <h2>Products</h2>
      <div className={styles["search-filter-container"]}>
        <SearchBar value={searchText} setSearchText={setSearchText} />
        <Dropdown
          filter={filterBrands}
          onChangeHandler={setFilterBrands}
          items={brands}
        />
        <Dropdown
          filter={filterCategory}
          onChangeHandler={setFilterCategory}
          items={categories}
        />
        <Input
          type="number"
          placeholder="Price from"
          value={filterPriceFrom}
          onChangeHandler={setFilterPriceFrom}
        />
        <Input
          type="number"
          placeholder="Price to"
          value={filterPriceTo}
          onChangeHandler={setFilterPriceTo}
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
            currentPage={page || 1}
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
