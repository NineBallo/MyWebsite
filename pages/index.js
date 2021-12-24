import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My site!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Assets/Site/logoTS.png" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          as="font"
          crossOrigin=""
        />
      </Head>

        <div className={styles.headerImg}>
            <div className={styles.headerOverlay}>
                <div className={styles.blackTSBoxTitle}>
                    <h1 className={styles.title}>
                        {" "}
                        <Typewriter
                            options={{
                                strings: ["Nathaniel Dean", "NineBall"],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                                pauseFor: 2000,
                            }}
                        />
                    </h1>
                </div>
                <div className={styles.blackTSBoxDesc}>
                    <p className={styles.description}>
                        Student, developer, and questionable graphics designer.
                    </p>
                </div>
            </div>
      </div>

      <main className={styles.main}>
        <div className={styles.grid}>
          <Link href="/Projects">
            <div className={styles.card}>
              <b style={{fontSize: "120%"}}>My Projects</b>
              <p style={{fontSize: "100%"}}>All of my current public projects and what they do.</p>
            </div>
          </Link>

          <Link href="/Volunteer">
            <div className={styles.card}>
              <b style={{fontSize: "120%"}}>Volunteer Work and Open-Source contributions</b>
              <p style={{fontSize: "100%"}}>
                Here you can find some of the time I've contributed to the
                community.
              </p>
            </div>
          </Link>

          <Link href="/Contact">
            <div className={styles.card}>
              <b style={{fontSize: "120%"}}>Contact Me</b>
              <p style={{fontSize: "100%"}}>If you wish to get in touch here is my contact info!</p>
            </div>
          </Link>

          <Link href="/AboutMe">
            <div className={styles.card}>
              <b style={{fontSize: "120%"}}>About Me</b>
              <p style={{fontSize: "100%"}}>Learn some more about me!</p>
            </div>
          </Link>
        </div>
      </main>

      <footer>
        <Link href="https://github.com/NineBallo/NewWebsite">
          <h4 className={styles.footerLink}>Made by ME!</h4>
        </Link>
      </footer>
    </div>
  );
}
