import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import pStyles from "../styles/Projects.module.css";
import {Header} from "../components/Header";
import {SnakeBoxChild, SnakeBoxParent} from "../components/TextBox";
import Image from "next/image";


import Pince from "../public/Volunteer/Pince.png";
import OpenRGB from "../public/Volunteer/OpenRGB.png";



export default function Volunteer() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Volunteer Work</title>
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
                <Link href="/Projects">
                    <div className={styles.subpageButton}>
                        <p>Projects</p>
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
            <h1 className={styles.title}>Volunteer Work</h1>


            <SnakeBoxParent>

                <SnakeBoxChild
                    type="even"
                    img={Pince}
                    txt={"AAAAA"}
                />
                <SnakeBoxChild
                    type="odd"
                    img={OpenRGB}
                    txt={"BBBBBB"}
                />

                <SnakeBoxChild
                    type="even"
                    img={Pince}
                    txt={"AAAAA"}
                />

            </SnakeBoxParent>





        </div>
    );
}
