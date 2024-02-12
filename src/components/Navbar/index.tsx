"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// INTL
import { useTranslations } from "next-intl";
//Styles
import styles from "./styles.module.scss";
//Icons
import { FaBars } from "react-icons/fa";
//Images
import logo from "@/../../public/icons/image 4.svg";
import LangDrop from "../LangDrop";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const t = useTranslations("Navbar");

  return (
    <nav className={styles.navbar}>
      {/* MOBILE NAVBAR */}

      <div className={styles.mobile_navbar}>
        <div className={styles.logo}>
          <Image src={logo} alt="Logo" width={183} height={36} />
        </div>
        <div>
          <button className={styles.menuButton}>
            <FaBars className={styles.menuIcon} />
          </button>
        </div>
      </div>

      {/* DESKTOP NAVBAR */}
      <div className={styles.desktop_navbar}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={logo} alt="Logo" width={183} height={36} />
          </Link>
        </div>
        <div className={styles.nav_group}>
          <div onClick={toggleDropdown} className={styles.dropdown}>
            {t("item_one")} ▼
            {dropdownOpen && (
              <div className={styles.dropdown_content}>
                <Link href="/">Chatbots</Link>
                <Link href="/">Agents</Link>
                <Link href="/">Agents</Link>
              </div>
            )}
          </div>

          <Link href="/">{t("item_two")} </Link>
          <Link href="/">{t("item_three")} </Link>
        </div>
        <div className={styles.nav_about}>
          <Link href="/">{t("agents")} </Link>
          <button className={styles.button_notimation}>
            Notimation Entreprice
          </button>
          <LangDrop />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
