import React from "react";
import styles from "./styles.module.scss";

import { useTranslations } from "next-intl";

const SearchButton = () => {
  const t = useTranslations("Home");
  return (
    <div className={styles.search}>
      <input type="text" placeholder={t("placeholder_search")} />
      <button>{t("search_button")}</button>
    </div>
  );
};

export default SearchButton;
