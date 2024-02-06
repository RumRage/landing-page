import Image from "next/image";
import styles from "./styles.module.scss";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/icons/image 4.svg" alt="Logo" width={183} height={36} />
      </div>
      <div>
        <button className={styles.menuButton}>
          <FaBars className={styles.menuIcon} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
