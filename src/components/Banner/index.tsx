import styles from "./styles.module.scss";

import { useTranslations } from "next-intl";

const Banner = () => {
  const t = useTranslations("Home");
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <p>- {t("banner_one")} </p>
        <p>+ {t("banner_two")} </p>
        <p>+ {t("banner_three")} </p>
      </div>
    </div>
  );
};

export default Banner;
