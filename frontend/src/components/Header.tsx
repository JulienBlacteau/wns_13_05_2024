import Link from "next/link";
import styles from "@/styles/components/header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.text}>Checkpoint : frontend</h1>
      <Link className={styles.link} href="/">Countries</Link>
    </header>
  );
}
