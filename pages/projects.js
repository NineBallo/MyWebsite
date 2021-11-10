import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import pStyles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NineBall's Projects!</title>
        <meta
          name="description"
          content="A list of my currently public projects"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          as="font"
          crossOrigin=""
        />
      </Head>

      <h1 className={styles.title}>My Projects</h1>

      <header className={styles.subpageHeader}>
        <div className={styles.headerNameBox}>
          <h2 className={styles.subpageName}>NineBall</h2>
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
          <Link href="/aboutme">
            <div className={styles.subpageButton}>
              <p>About Me</p>
            </div>
          </Link>
        </div>
      </header>

      <div className={styles.grid}>
        <Link href={"/projects/NineEngine"}>
          <div className={styles.card}>
            <h2>NineEngine</h2>
            <p>A simple vulkan renderer as a intro to graphics programming.</p>
          </div>
        </Link>

        <Link href={"/projects/ZipZorpBeebleBorp"}>
          <div className={styles.card}>
            <h2>ZipZorpBeebleBorp</h2>
            <p>Exploring the memory subsystem of a OS.</p>
          </div>
        </Link>

        <div className={styles.card}>
          <h2>NineBall.wtf</h2>
          <p>My old website</p>
        </div>
      </div>
    </div>
  );
}
