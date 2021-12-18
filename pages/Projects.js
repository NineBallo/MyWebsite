import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import pStyles from "../styles/Projects.module.css";
import {Header} from "../components/Header";
import {ProjectCard} from "../components/TextBox";


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
        <Link href="/Volunteer">
          <div className={styles.subpageButton}>
            <p>Volunteer Work</p>
          </div>
        </Link>
        <Link href="/Contact">
          <div className={styles.subpageButton}>
            <p>Contact Me</p>
          </div>
        </Link>
        <Link href="/AboutMe">
          <div className={styles.subpageButton}>
            <p>About Me</p>
          </div>
        </Link>
      </Header>

      <div className={pStyles.titleSpacer}/>
      <h1 className={styles.title}>My Projects</h1>

      <div className={styles.grid}>

        <ProjectCard
        link={"/Projects/NineEngine"}
        title={"NineEngine"}
        desc={"A \"simple\" Vulkan renderer as a intro to graphics programming."}
        />
        <ProjectCard
            link={"/Projects/ZipZorpBeebleBorp"}
            title={"ZipZorpBeebleBorp"}
            desc={"Exploring the memory subsystem of a OS."}
        />
        <ProjectCard
            link={"/Projects/Solamanders"}
            title={"Solamanders"}
            desc={"A commissioned NFT project I worked on. Implements basic genetics, and family trees."}
        />

      </div>
    </div>
  );
}
