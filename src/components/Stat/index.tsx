import React from "react";
import styles from "./styles.module.scss";

interface StatProps {
  number: number | string;
  title: string;
}

const Stat: React.FC<StatProps> = ({ number, title }) => {
  return (
    <div className={styles.section}>
      <div className={styles.stat}>
        <h1>{number}</h1>
        <p>{title} </p>
      </div>
    </div>
  );
};

export default Stat;
