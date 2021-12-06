import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import pStyles from "../styles/Projects.module.css";
import {Header} from "../components/Header";

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

      <Header goBackLink="/">
        <Link href="/volunteer">
          <div className={styles.subpageButton}>
            <p>Volunteer work</p>
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
      </Header>

      <div className={pStyles.titleSpacer}/>
      <h1 className={styles.title}>My Projects</h1>

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
