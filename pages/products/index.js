import ListProducts from "@/components/products/ListProducts";
import styles from "../../styles/Carts.module.scss";

const Products = ({ products }) => {
  return (
    <div className={styles.container}>
      <ListProducts products={products} />
    </div>
  );
};

export async function getStaticProps() {
  const products = await fetch("https://dummyjson.com/products");
  const dataProducts = await products.json();

  return {
    props: {
      products: dataProducts.products,
    },
  };
}

export default Products;
