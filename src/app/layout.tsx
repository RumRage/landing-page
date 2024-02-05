import type { Metadata } from "next";
import { Barlow } from "next/font/google";

import "../styles/globals.scss";

//components
import Navbar from "../components/Navbar";

//pages
import Home from "./home/page";
import Work from "./work/page";

const barlow = Barlow({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Clara Villarruel",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body className={barlow.className}>
        {" "}
        <Navbar />
        <Home />
        <Work />
      </body>
    </html>
  );
}
