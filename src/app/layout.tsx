import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";

//components
import Navbar from "../components/Navbar";

//pages
import Home from "./home/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Clara Villarruel",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Home />
      </body>
    </html>
  );
}
