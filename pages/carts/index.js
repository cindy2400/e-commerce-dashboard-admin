import ListCarts from "@/components/carts/ListCarts";

const Carts = ({ carts }) => {
  console.log(carts);
  return (
    <div>
      <ListCarts carts={carts} />
    </div>
  );
};

export default Carts;

export async function getStaticProps() {
  const carts = await fetch("https://dummyjson.com/carts");
  const cartsResult = await carts.json();
  const cartsData = cartsResult.carts;

  const user = await fetch("https://dummyjson.com/users/?limit=100");
  const userResult = await user.json();
  const userData = userResult.users;

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
