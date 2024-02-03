import Image from "next/image";
import styles from "./styles.module.scss";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/icons/image 4.svg" alt="Logo" width={100} height={50} />
      </div>
      <div className={styles.menuIcon}>
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;
