import React from "react";
import styles from "./responsive.module.scss";
import Link from "next/link";

const Options = () => {
  return (
    <ul className={styles.container}>
      <Link href="rm" className={styles.item}>
        <div className={styles.textContainer}>
          <h1>Robno - Materijalno</h1>
        </div>
      </Link>
      <Link href="kp" className={styles.item}>
        <div className={styles.textContainer}>
          <h1>KUF - KIF - PDV Prijava</h1>
        </div>
      </Link>
      <Link href="fk" className={styles.item}>
        <div className={styles.textContainer}>
          <h1>Finansijsko Knjigovodstvo</h1>
        </div>
      </Link>
      <Link href="os" className={styles.item}>
        <div className={styles.textContainer}>
          <h1>Osnovna Sredstva</h1>
        </div>
      </Link>
      <Link href="bp" className={styles.item}>
        <div className={styles.textContainer}>
          <h1>Blagajničko Poslovanje</h1>
        </div>
      </Link>
      <Link href="op" className={styles.item}>
        <div className={styles.textContainer}>
          <h1>Obračun Plata - Virmani</h1>
        </div>
      </Link>
    </ul>
  );
};

export default Options;
