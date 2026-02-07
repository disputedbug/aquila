import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Ownership of "Aquila - Social Media control room" vests with Trine
        Engineering Private Limited (TEPL). Use is permitted strictly under
        license.
      </p>
      <span>Designed and developed by TEPL Development team</span>
    </footer>
  );
}
