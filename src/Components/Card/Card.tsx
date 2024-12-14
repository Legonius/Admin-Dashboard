import styles from "./card.module.scss";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

const Card = ({ name, amount, value, percent }: cardInter) => {
  const colorCode = (category: string): string => {
    let color: string = "";
    switch (category) {
      case "Revenue":
        color = "#5356FF";
        break;
      case "Users":
        color = "#378CE7";
        break;
      case "Transactions":
        color = "#FFB22C";
        break;
      case "Products":
        color = "#6439FF";
        break;
    }
    return color;
  };
  return (
    <div className={styles.card}>
      <div className={styles.cardLeft}>
        <span className={styles.name}>{name}</span>
        <span className={styles.amount}>{amount}</span>
        <span className={value >= 0 ? styles.value : styles.valueMinus}>
          {value >= 0 ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
          {value >= 0 ? " +" + value : " " + value}
        </span>
      </div>
      <div
        className={styles.cardRight}
        style={{
          background: ` conic-gradient(${colorCode(name)} ${
            (Math.abs(percent) / 100) * 360
          }deg,white 0deg)`,
          borderRadius: "50%",
          color: colorCode(name),
        }}
      >
        <span className={styles.percent}>{percent}% </span>
      </div>
    </div>
  );
};

interface cardInter {
  name: string;
  amount: string;
  value: number;
  percent: number;
}

export default Card;
