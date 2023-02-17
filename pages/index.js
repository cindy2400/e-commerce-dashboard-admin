import Sidebar from "@/components/layout/sidebar/Sidebar";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Sidebar />
    </>
  );
}
