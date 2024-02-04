import React from "react";
import styles from "./styles.module.scss";

const SearchButton = () => {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Ingresa tu email o teléfono" />
      <button>Quiero que me contacten</button>
    </div>
  );
};

export default SearchButton;
