import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import pStyles from "../styles/Projects.module.css";
import {Header} from "../components/Header";
import {ContactCard} from "../components/TextBox";

export default function ContactMe() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact me!</title>
        <meta name="description" content="How to contact me" />
        <link rel="icon" href="/Assets/Site/logoTS.png" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Header>
        <Link href="/Volunteer">
          <div className={styles.subpageButton}>
            <p>Volunteer Work</p>
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
        <ContactCard
            link={"mailto:NineBallCode@gmail.com"}
            title={"Mail"}
            desc={"For any general or formal contacts this is be best."}
        />
        <ContactCard
            link={"https://discord.com/users/279088726955655184"}
            title={"Discord"}
            desc={"For any quick informal requests this is the fastest way to get to me."}
        />
        <ContactCard
            link={"https://github.com/NineBallo"}
            title={"GitHub"}
            desc={"To view the current state of my public projects this is where they will be."}
        />
        <ContactCard
            link={"https://steamcommunity.com/id/NineBallo/"}
            title={"Steam"}
            desc={"This is where I go to unwind, if you wish to hang out just add me."}
        />
      </div>


        <footer>
            <Link href="https://github.com/NineBallo/NewWebsite">
                <h4 className={styles.footerLink}>Made by ME!</h4>
            </Link>
        </footer>
    </div>
  );
}
