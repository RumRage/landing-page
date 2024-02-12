import React from "react";
import styles from "./styles.module.scss";

import { useTranslations } from "next-intl";

const Stats = () => {
  const t = useTranslations("Home");
  return (
    <div className={styles.section}>
      <div className={styles.stat}>
        <h1>+2943</h1>
        <p>{t("stat_one")} </p>
      </div>
      <div className={styles.stat}>
        <h1>+1M</h1>
        <p>{t("stat_two")}</p>
      </div>
    </div>
  );
};

export default Stats;
