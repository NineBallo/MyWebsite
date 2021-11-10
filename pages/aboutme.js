import styles from "../styles/Home.module.css";
import abstyles from "../styles/AboutMe.module.css";
import Link from "next/link";
import Head from "next/head";

export default function AboutMe() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About me!</title>
        <meta name="description" content="About me!" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          as="font"
          crossOrigin=""
        />
      </Head>

      <header className={styles.subpageHeader}>
        <div className={styles.headerNameBox}>
          <div className={styles.subpageName}>
            <h2>NineBall</h2>
          </div>
        </div>
        <div className={styles.headerButtonBox}>
          <Link href="/">
            <div className={styles.subpageButton}>
              <p>Main</p>
            </div>
          </Link>
          <Link href="/contact">
            <div className={styles.subpageButton}>
              <p>Contact Me</p>
            </div>
          </Link>
          <Link href="/projects">
            <div className={styles.subpageButton}>
              <p>My Projects</p>
            </div>
          </Link>
        </div>
      </header>

      <div className={abstyles.infoContainer}>
        <div>
          <h4>What I do</h4>
          <div className={abstyles.infoBox}>
            <p>test</p>
          </div>
          <h4>Awawawas</h4>
          <div className={abstyles.infoBox}>
            <p>test</p>
          </div>
        </div>
      </div>

      <h2>About Me!</h2>

      <p>I am a 16 year old C++ and js programmer</p>

      <p>
        I have a passion for computers and ever since I built my first computer
        back in 2016 I have been constantly learning from it
      </p>

      <p>
        So far I have learned C++ and JavaScript. However I also have a
        rudemetery understanding of Python.
      </p>

      <p>
        I enjoy reading through opensource programs and adding new features I
        want to them when possible, there are a few programs in production with
        my code currently in them
      </p>
    </div>
  );
}
