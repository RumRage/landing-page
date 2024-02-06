import styles from "./styles.module.scss";

const Banner = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <p>-Tiempo</p>
        <p>+Plataforma</p>
        <p>+Conversiones</p>
      </div>
    </div>
  );
};

export default Banner;
