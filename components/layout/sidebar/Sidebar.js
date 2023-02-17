import styles from "../../../styles/Sidebar.module.scss";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <SidebarMenu menuName="Products" linkTo="/products" />
      <SidebarMenu menuName="Carts" linkTo="/carts" />
    </div>
  );
};

export default Sidebar;
