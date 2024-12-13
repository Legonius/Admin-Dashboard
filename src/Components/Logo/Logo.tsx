import styles from "./logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.mid}>
      <div className={styles.circle}>
        <h1 className={styles.h1}>Admin</h1>
        <img
          className={styles.image}
          src="https://www.pwddelhi.gov.in/img/loggin.png"
        />
      </div>
    </div>
  );
};

export default Logo;
