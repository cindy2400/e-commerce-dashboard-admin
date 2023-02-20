import Pagination from "@/components/layout/Pagination";
import SearchBar from "@/components/layout/SearchBar";
import ListProducts from "@/components/products/ListProducts";
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
    const fetchTimeout = setTimeout(() => {
      if (
        search === undefined &&
        brand === undefined &&
        category === undefined &&
        price_from === undefined &&
        price_to === undefined
      ) {
        fetch(`http://localhost:3000/api/products?page=${pageClick}`)
          .then((res) => res.json())
          .then((data) => {
            setProductState(data.data.products);
            setPage(data.data.page);
            setItemPerPage(data.data.item_per_page);
            setTotalItems(data.data.total_items);
          });
      } else if (
        search !== undefined &&
        brand !== undefined &&
        category !== undefined &&
        price_from !== undefined &&
        price_to !== undefined
      ) {
        fetch(
          `http://localhost:3000/api/products?search=${search}&brand=${brand}&category=${category}&price_from=${price_from}&price_to=${price_to}&page=${pageClick}`
        )
          .then((res) => res.json())
          .then((data) => {
            setProductState(data.data.products);
            setPage(data.data.page);
            setItemPerPage(data.data.item_per_page);
            setTotalItems(data.data.total_items);
          });
      } else if (
        search !== undefined &&
        brand === undefined &&
        category === undefined &&
        price_from === undefined &&
        price_to === undefined
      ) {
        fetch(
          `http://localhost:3000/api/products?search=${search}&page=${pageClick}`
        )
          .then((res) => res.json())
          .then((data) => {
            setProductState(data.data.products);
            setPage(data.data.page);
            setItemPerPage(data.data.item_per_page);
            setTotalItems(data.data.total_items);
          });
      } else if (
        search === undefined &&
        brand !== undefined &&
        category === undefined &&
        price_from === undefined &&
        price_to === undefined
      ) {
        fetch(
          `http://localhost:3000/api/products?brand=${brand}&page=${pageClick}`
        )
          .then((res) => res.json())
          .then((data) => {
            setProductState(data.data.products);
            setPage(data.data.page);
            setItemPerPage(data.data.item_per_page);
            setTotalItems(data.data.total_items);
          });
      } else if (
        search === undefined &&
        brand === undefined &&
        category !== undefined &&
        price_from === undefined &&
        price_to === undefined
      ) {
        fetch(
          `http://localhost:3000/api/products?category=${category}&page=${pageClick}`
        )
          .then((res) => res.json())
          .then((data) => {
            setProductState(data.data.products);
            setPage(data.data.page);
            setItemPerPage(data.data.item_per_page);
            setTotalItems(data.data.total_items);
          });
      } else if (
        search === undefined &&
        brand === undefined &&
        category === undefined &&
        price_from !== undefined &&
        price_to !== undefined
      ) {
        fetch(
          `http://localhost:3000/api/products?price_from=${price_from}&price_to=${price_to}&page=${pageClick}`
        )
          .then((res) => res.json())
          .then((data) => {
            setProductState(data.data.products);
            setPage(data.data.page);
            setItemPerPage(data.data.item_per_page);
            setTotalItems(data.data.total_items);
          });
      } else if (
        search !== undefined &&
        brand !== undefined &&
        category === undefined &&
        price_from === undefined &&
        price_to === undefined
      ) {
        fetch(
          `http://localhost:3000/api/products?search=${search}&brand=${brand}&page=${pageClick}`
        )
          .then((res) => res.json())
          .then((data) => {
            setProductState(data.data.products);
            setPage(data.data.page);
            setItemPerPage(data.data.item_per_page);
            setTotalItems(data.data.total_items);
          });
      } else if (
        search !== undefined &&
        brand === undefined &&
        category !== undefined &&
        price_from === undefined &&
        price_to === undefined
      ) {
        fetch(
          `http://localhost:3000/api/products?search=${search}&category=${category}&page=${pageClick}`
        )
          .then((res) => res.json())
          .then((data) => {
            setProductState(data.data.products);
            setPage(data.data.page);
            setItemPerPage(data.data.item_per_page);
            setTotalItems(data.data.total_items);
          });
      } else if (
        search !== undefined &&
        brand === undefined &&
        category === undefined &&
        price_from !== undefined &&
        price_to !== undefined
      ) {
        fetch(
          `http://localhost:3000/api/products?search=${search}&price_from=${price_from}&price_to=${price_to}&page=${pageClick}`
        )
          .then((res) => res.json())
          .then((data) => {
            setProductState(data.data.products);
            setPage(data.data.page);
            setItemPerPage(data.data.item_per_page);
            setTotalItems(data.data.total_items);
          });
      } else if (
        search === undefined &&
        brand !== undefined &&
        category !== undefined &&
        price_from === undefined &&
        price_to === undefined
      ) {
        fetch(
          `http://localhost:3000/api/products?brand=${brand}&category=${category}&page=${pageClick}`
        )
          .then((res) => res.json())
          .then((data) => {
            setProductState(data.data.products);
            setPage(data.data.page);
            setItemPerPage(data.data.item_per_page);
            setTotalItems(data.data.total_items);
          });
      } else if (
        search === undefined &&
        brand !== undefined &&
        category === undefined &&
        price_from !== undefined &&
        price_to !== undefined
      ) {
        fetch(
          `http://localhost:3000/api/products?brand=${brand}&price_from=${price_from}&price_to=${price_to}&page=${pageClick}`
        )
          .then((res) => res.json())
          .then((data) => {
            setProductState(data.data.products);
            setPage(data.data.page);
            setItemPerPage(data.data.item_per_page);
            setTotalItems(data.data.total_items);
          });
      } else if (
        search === undefined &&
        brand === undefined &&
        category !== undefined &&
        price_from !== undefined &&
        price_to !== undefined
      ) {
        fetch(
          `http://localhost:3000/api/products?category=${category}&price_from=${price_from}&price_to=${price_to}&page=${pageClick}`
        )
          .then((res) => res.json())
          .then((data) => {
            setProductState(data.data.products);
            setPage(data.data.page);
            setItemPerPage(data.data.item_per_page);
            setTotalItems(data.data.total_items);
          });
      } else if (
        search !== undefined &&
        brand !== undefined &&
        category !== undefined &&
        price_from === undefined &&
        price_to === undefined
      ) {
        fetch(
          `http://localhost:3000/api/products?search=${search}&brand=${brand}&category=${category}&page=${pageClick}`
        )
          .then((res) => res.json())
          .then((data) => {
            setProductState(data.data.products);
            setPage(data.data.page);
            setItemPerPage(data.data.item_per_page);
            setTotalItems(data.data.total_items);
          });
      } else if (
        search !== undefined &&
        brand === undefined &&
        category !== undefined &&
        price_from !== undefined &&
        price_to !== undefined
      ) {
        fetch(
          `http://localhost:3000/api/products?search=${search}&category=${category}&price_from=${price_from}&price_to=${price_to}&page=${pageClick}`
        )
          .then((res) => res.json())
          .then((data) => {
            setProductState(data.data.products);
            setPage(data.data.page);
            setItemPerPage(data.data.item_per_page);
            setTotalItems(data.data.total_items);
          });
      } else if (
        search === undefined &&
        brand !== undefined &&
        category !== undefined &&
        price_from !== undefined &&
        price_to !== undefined
      ) {
        fetch(
          `http://localhost:3000/api/products?brand=${brand}&category=${category}&price_from=${price_from}&price_to=${price_to}&page=${pageClick}`
        )
          .then((res) => res.json())
          .then((data) => {
            setProductState(data.data.products);
            setPage(data.data.page);
            setItemPerPage(data.data.item_per_page);
            setTotalItems(data.data.total_items);
          });
      }
    }, 500);

    return () => clearTimeout(fetchTimeout);
  }, [search, brand, category, price_from, price_to, pageClick]);

  useEffect(() => {
    const routerTimeout = setTimeout(() => {
      if (
        searchText === "" &&
        filterBrands === "" &&
        filterCategory === "" &&
        filterPriceFrom === "" &&
        filterPriceTo === ""
      ) {
        router.push(`/products`);
      } else if (
        searchText !== "" &&
        filterBrands !== "" &&
        filterCategory !== "" &&
        filterPriceFrom !== "" &&
        filterPriceTo !== ""
      ) {
        router.push(
          `/products?search=${searchText}&brand=${filterBrands}&category=${filterCategory}&price_from=${filterPriceFrom}&price_to=${filterPriceTo}`
        );
      } else if (
        searchText !== "" &&
        filterBrands === "" &&
        filterCategory === "" &&
        filterPriceFrom === "" &&
        filterPriceTo === ""
      ) {
        router.push(`/products?search=${searchText}`);
      } else if (
        searchText === "" &&
        filterBrands !== "" &&
        filterCategory === "" &&
        filterPriceFrom === "" &&
        filterPriceTo === ""
      ) {
        router.push(`/products?brand=${filterBrands}`);
      } else if (
        searchText === "" &&
        filterBrands === "" &&
        filterCategory !== "" &&
        filterPriceFrom === "" &&
        filterPriceTo === ""
      ) {
        router.push(`/products?category=${filterCategory}`);
      } else if (
        searchText === "" &&
        filterBrands === "" &&
        filterCategory === "" &&
        filterPriceFrom !== "" &&
        filterPriceTo !== ""
      ) {
        router.push(
          `/products?price_from=${filterPriceFrom}&price_to=${filterPriceTo}`
        );
      } else if (
        searchText !== "" &&
        filterBrands !== "" &&
        filterCategory === "" &&
        filterPriceFrom === "" &&
        filterPriceTo === ""
      ) {
        router.push(`/products?search=${searchText}&brand=${filterBrands}`);
      } else if (
        searchText !== "" &&
        filterBrands === "" &&
        filterCategory !== "" &&
        filterPriceFrom === "" &&
        filterPriceTo === ""
      ) {
        router.push(
          `/products?search=${searchText}&category=${filterCategory}`
        );
      } else if (
        searchText !== "" &&
        filterBrands === "" &&
        filterCategory === "" &&
        filterPriceFrom !== "" &&
        filterPriceTo !== ""
      ) {
        router.push(
          `/products?search=${searchText}&price_from=${filterPriceFrom}&price_to=${filterPriceTo}`
        );
      } else if (
        searchText === "" &&
        filterBrands !== "" &&
        filterCategory !== "" &&
        filterPriceFrom === "" &&
        filterPriceTo === ""
      ) {
        router.push(
          `/products?brand=${filterBrands}&category=${filterCategory}`
        );
      } else if (
        searchText === "" &&
        filterBrands !== "" &&
        filterCategory === "" &&
        filterPriceFrom !== "" &&
        filterPriceTo !== ""
      ) {
        router.push(
          `/products?brand=${filterBrands}&price_from=${filterPriceFrom}&price_to=${filterPriceTo}`
        );
      } else if (
        searchText === "" &&
        filterBrands === "" &&
        filterCategory !== "" &&
        filterPriceFrom !== "" &&
        filterPriceTo !== ""
      ) {
        router.push(
          `/products?category=${filterCategory}&price_from=${filterPriceFrom}&price_to=${filterPriceTo}`
        );
      } else if (
        searchText !== "" &&
        filterBrands !== "" &&
        filterCategory !== "" &&
        filterPriceFrom === "" &&
        filterPriceTo === ""
      ) {
        router.push(
          `/products?search=${searchText}&brand=${filterBrands}&category=${filterCategory}`
        );
      } else if (
        searchText !== "" &&
        filterBrands === "" &&
        filterCategory !== "" &&
        filterPriceFrom !== "" &&
        filterPriceTo !== ""
      ) {
        router.push(
          `/products?search=${searchText}&category=${filterCategory}&price_from=${filterPriceFrom}&price_to=${filterPriceTo}`
        );
      } else if (
        searchText === "" &&
        filterBrands !== "" &&
        filterCategory !== "" &&
        filterPriceFrom !== "" &&
        filterPriceTo !== ""
      ) {
        router.push(
          `/products?brand=${filterBrands}&category=${filterCategory}&price_from=${filterPriceFrom}&price_to=${filterPriceTo}`
        );
      }
    }, 500);
    return () => clearTimeout(routerTimeout);
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
        <SearchBar value={search} setSearchText={setSearchText} />
        <select
          className={styles.select}
          value={brand}
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
          value={category}
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
          value={price_from}
          className={styles.input}
          onChange={(e) => setFilterPriceFrom(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price to"
          value={price_to}
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
  const products = await fetch("http://localhost:3000/api/products");
  const dataProducts = await products.json();
  const allProducts = dataProducts.data.products;

  const brands = await fetch("http://localhost:3000/api/brands");
  const dataBrands = await brands.json();
  const allBrands = dataBrands.data.brands;

  const categories = await fetch("http://localhost:3000/api/categories");
  const dataCategories = await categories.json();
  const allCategories = dataCategories.data.categories;

  return {
    props: {
      products: allProducts,
      brands: allBrands,
      categories: allCategories,
    },
  };
}

export default Products;
