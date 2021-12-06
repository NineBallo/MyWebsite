import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import pStyles from "../styles/Projects.module.css";
import {Header} from "../components/Header";

export default function ContactMe() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact me!</title>
        <meta name="description" content="How to contact me" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Header>
        <Link href="/">
          <div className={styles.subpageButton}>
            <p>Main</p>
          </div>
        </Link>
        <Link href="/Projects">
          <div className={styles.subpageButton}>
            <p>Projects</p>
          </div>
        </Link>
        <Link href="/AboutMe">
          <div className={styles.subpageButton}>
            <p>About Me</p>
          </div>
        </Link>
      </Header>

      <div className={pStyles.titleSpacer}/>
      <h1 className={styles.title}>Contact Me!</h1>

      <div className={styles.grid}>
        <Link href={"mailto:NineBallCode@gmail.com"}>
          <div className={styles.card}>
            <h2>Mail</h2>
            <p>For any general or formal contacts this is be best.</p>
          </div>
        </Link>

        <Link href={"https://discord.com/users/279088726955655184"}>
          <div className={styles.card}>
            <h2>Discord</h2>
            <p>For any quick informal requests this is the best.</p>
          </div>
        </Link>

        <Link href={"https://github.com/NineBallo"}>
          <div className={styles.card}>
            <h2>GitHub</h2>
            <p>
              To view the current state of my projects this is where they will
              be.
            </p>
          </div>
        </Link>

        <Link href={"https://steamcommunity.com/id/NineBallo/"}>
          <div className={styles.card}>
            <h2>Steam</h2>
            <p>
              This is where I go to unwind, if you wish to play just add me.
            </p>
          </div>
        </Link>
      </div>

      <footer>
        <Link href="/">
          <p>Back to main</p>
        </Link>
      </footer>
    </div>
  );
}
