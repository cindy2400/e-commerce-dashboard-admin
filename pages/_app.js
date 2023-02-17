import Sidebar from "@/components/layout/sidebar/Sidebar";
import "@/styles/global.scss";
import styles from "../styles/app.module.scss";

export default function App({ Component, pageProps }) {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <Component {...pageProps} />
    </div>
  );
}
