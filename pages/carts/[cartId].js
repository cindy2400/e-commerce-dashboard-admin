import DetailCart from "@/components/carts/DetailCart";
import styles from "../../styles/CartDetail.module.scss";

const CartDetail = ({ cart }) => {
  return (
    <div className={styles.container}>
      <DetailCart cart={cart} />
    </div>
  );
};

export default CartDetail;

export async function getStaticPaths() {
  const getCarts = await fetch("https://dummyjson.com/carts");
  const response = await getCarts.json();
  const dataCarts = response.carts;

  return {
    paths: dataCarts.map((cart) => {
      return {
        params: { cartId: cart.id.toString() },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const cartId = context.params.cartId;
  const singleCart = await fetch(`https://dummyjson.com/carts/${cartId}`);
  const singleCartResponse = await singleCart.json();

  const singleCartUserId = singleCartResponse.userId;
  const userInfo = await fetch(
    `https://dummyjson.com/users/${singleCartUserId}`
  );
  const userInfoResponse = await userInfo.json();

  const singleCartAndUserInfo = { ...singleCartResponse, ...userInfoResponse };

  return {
    props: {
      cart: singleCartAndUserInfo,
    },
  };
}
