import type { Metadata } from "next";
import { Inter, Barlow } from "next/font/google";

import "../styles/globals.scss";

//components
import Navbar from "../components/Navbar";

//pages
import Home from "./home/page";
import Work from "./work/page";

const inter = Inter({ subsets: ["latin"] });
const barlow = Barlow({ weight: ["400", "700"], subsets: ["latin"] });

export { inter, barlow };

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Clara Villarruel",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <Navbar />
        <Home />
        <Work />
      </body>
    </html>
  );
}
