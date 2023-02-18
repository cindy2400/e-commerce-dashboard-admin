import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../styles/SidebarMenu.module.scss";

const SidebarMenu = ({ menuName, linkTo }) => {
  const router = useRouter();

  return (
    <Link
      href={linkTo}
      className={
        router.pathname === linkTo
          ? styles["sidebar-menu-button-active"]
          : styles["sidebar-menu-button"]
      }
    >
      {menuName}
    </Link>
  );
};

export default SidebarMenu;
