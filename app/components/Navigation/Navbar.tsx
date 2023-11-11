
import Image from "next/image";
import React from "react";

import logo from "../../../public/logo.png";
import infolab from "../../../public/infolab.png";

import styles from "./responsive.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>about</h2>
        </div>
        <div className={styles.mid}>
          <Image src={infolab} alt="infolab" />
        </div>
        <div className={styles.right}>
          <Image src={logo} alt="logo" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
