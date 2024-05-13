import styles from "@/styles/components/card.module.css";
import { Country } from "@/types";

function Card({ name, emoji }: Country) {
  return (
      <div className={styles.card}>
        <div className={styles.cardText}>{name}</div>
        <div className={styles.cardEmoji}>{emoji}</div>
      </div>
  );
}

export default Card;