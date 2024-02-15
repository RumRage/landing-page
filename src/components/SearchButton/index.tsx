"use client";

import styles from "./styles.module.scss";
import { useState } from "react";
import { useTranslations } from "next-intl";

const SearchButton = () => {
  const t = useTranslations("Home");

  const [email, setEmail] = useState("");

  const handleClick = () => {
    console.log("Email: ", email);
  };

  return (
    <form className={styles.search}>
      <input
        type="email"
        placeholder={t("placeholder_search")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="button" onClick={handleClick}>
        {t("search_button")}
      </button>
    </form>
  );
};

export default SearchButton;
