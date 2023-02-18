import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "../styles/Home.module.scss";

export default function Home({ brands }) {
  return (
    <div className={styles.container}>
      <h3>Chart of the number of items per Brand</h3>
      <BarChart width={730} height={250} data={brands}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="brand" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="totalItems" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}

export async function getStaticProps() {
  const getProducts = await fetch("https://dummyjson.com/products?limit=100");
  const productsResponse = await getProducts.json();
  const dataProducts = productsResponse.products;

  const getAllBrand = dataProducts.map((product) => product.brand);
  const getItemsOfAllBrands = getAllBrand.map((brandName) => {
    return {
      brand: brandName,
      totalItems: getAllBrand.filter((brand) => brand === brandName).length,
    };
  });

  const itemsOfBrand = [
    ...new Map(
      getItemsOfAllBrands.map((item) => [item["brand"], item])
    ).values(),
  ];

  return {
    props: {
      brands: itemsOfBrand,
    },
  };
}
