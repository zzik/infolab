import Image from "next/image";
import styles from './root.module.scss'
import Navbar from "./components/Navigation/Navbar";
import Options from "./components/Menu/Options";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.wrapper}>
        <Options />
      </main>
    </>
  );
}
