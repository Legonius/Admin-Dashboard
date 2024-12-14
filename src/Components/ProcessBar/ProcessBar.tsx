import styles from "./process.module.scss";

type Props = {
  value: number;
  heading: string;
};

const ProcessBar = ({ value, heading }: Props) => {
  return (
    <div className={styles.container}>
      <span>{heading}</span>

      <div>
        <div
          style={{
            width: value + "%",
            height: "100%",
            background: `hsl(${value * 1} 300 30)`,
          }}
        ></div>
      </div>
      <span>{value}%</span>
    </div>
  );
};

export default ProcessBar;
