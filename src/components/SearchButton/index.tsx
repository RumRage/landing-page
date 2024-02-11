import styles from "./styles.module.scss";

import { useTranslations } from "next-intl";

const SearchButton = () => {
  const t = useTranslations("Home");
  return (
    <div className={styles.search}>
      <form>
        <input type="text" placeholder={t("placeholder_search")} />
        <button>{t("search_button")}</button>
      </form>
    </div>
  );
};

export default SearchButton;
