import ListProducts from "@/components/products/ListProducts";

const Products = ({ products }) => {
  return (
    <div>
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
