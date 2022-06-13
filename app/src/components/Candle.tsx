import styles from "./Candle.module.scss";

const Candle = () => {
  return (
    <div className={styles.root}>
      <div className={styles.flame} />
      <div className={styles.candle}>
        {Array(4)
          .fill("_")
          .map((_, index) => {
            return <span key={index} />;
          })}
      </div>
      <div className={styles.overlay} />
    </div>
  );
};

export default Candle;
