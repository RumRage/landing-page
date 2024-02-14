import styles from "./styles.module.scss";

import { useTranslations } from "next-intl";

const SearchButton = () => {
  const t = useTranslations("Home");
  return (
    <form className={styles.search}>
      <input type="email" placeholder={t("placeholder_search")} />
      <button>{t("search_button")}</button>
    </form>
  );
};

export default SearchButton;
