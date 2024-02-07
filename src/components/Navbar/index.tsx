"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* MOBILE NAVBAR */}

      <div className={styles.mobile_navbar}>
        <div className={styles.logo}>
          <Image src="/icons/image 4.svg" alt="Logo" width={183} height={36} />
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
            <Image
              src="/icons/image 4.svg"
              alt="Logo"
              width={183}
              height={36}
            />
          </Link>
        </div>
        <div className={styles.nav_group}>
          <div onClick={toggleDropdown} className={styles.dropdown}>
            Productos ▼
            {dropdownOpen && (
              <div className={styles.dropdown_content}>
                <Link href="/">Chatbots</Link>
                <Link href="/">Agents</Link>
                <Link href="/">Agents</Link>
              </div>
            )}
          </div>

          <Link href="/">Pricing</Link>
          <Link href="/">Documentación</Link>
        </div>
        <div className={styles.nav_about}>
          <Link href="/">Hablar con un asesor</Link>
          <button className={styles.button_notimation}>
            Notimation Entreprice
          </button>
          <button className={styles.button_languaje}>ES</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
