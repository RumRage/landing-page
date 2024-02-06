import React from "react";
import styles from "./styles.module.scss";

const Stats = () => {
  return (
    <div className={styles.section}>
      <div className={styles.stat_one}>
        <h1>+2943</h1>
        <p>Campañas Enviadas</p>
      </div>
      <div className={styles.stat_two}>
        <h1>+1M</h1>
        <p>Respuestas Instantáneas</p>
      </div>
    </div>
  );
};

export default Stats;
