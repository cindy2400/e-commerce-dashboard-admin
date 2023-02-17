import Link from "next/link";
import styles from "../../../styles/SidebarMenu.module.scss";

const SidebarMenu = ({ menuName, linkTo }) => {
  return (
    <Link href={linkTo} className={styles["sidebar-menu-button"]}>
      {menuName}
    </Link>
  );
};

export default SidebarMenu;
