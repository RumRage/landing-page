import React from "react";
import styles from "./styles.module.scss";
import { barlow } from "../../app/layout";

interface StatProps {
  number_stat: string;
  title: string;
}

const Stat: React.FC<StatProps> = ({ number_stat, title }) => {
  return (
    <div className={styles.section}>
      <h1 className={barlow.className}>{number_stat}</h1>
      <p>{title}</p>
    </div>
  );
};

export default Stat;
