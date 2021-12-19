import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import pStyles from "../styles/Projects.module.css";
import {Header} from "../components/Header";
import {SnakeBoxChild, SnakeBoxParent} from "../components/TextBox";


import Pince from "../public/Volunteer/Pince.png";
import OpenRGB from "../public/Volunteer/OpenRGB.png";
import SlamBKB from "../public/Volunteer/Slam.png"
import Fest from "../public/Volunteer/Fest.jpg"

export default function Volunteer() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Volunteer Work</title>
                <meta
                    name="description"
                    content="Some of the time ive dedicated to the community"
                />
                <link rel="icon" href="/favicon.ico"/>
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
                    img={SlamBKB}
                    link={"http://www.stalbertslam.com/"}
                    txt={"SLAM is a community basketball league that works to create a fun environment where" +
                        " new players can get into the sport. I'm currently volunteering for St.Albert SLAM as an Assistant" +
                        " Coach."}
                />

                <SnakeBoxChild
                    link={"https://stalbert.ca/exp/childfest/"}
                    img={Fest}
                    txt={"I've volunteered to help run the Children's Festival. The Children's Festival is a event that the city of St. Albert holds in order to engage kids in the arts and " +
                        "help bring the community together."}
                />

                <SnakeBoxChild
                    link={"https://gitlab.com/CalcProgrammer1/OpenRGB"}
                    img={OpenRGB}
                    txt={"OpenRGB is a open-source, cross-platform way of combining " +
                        "all the silly proprietary RGB programs into one. For this I added support for my mouse: The Logitech G403 Hero." +
                        " This while a small contribution was my first ever contribution to any open-source software."}
                />

                <SnakeBoxChild
                    link={"https://github.com/korcankaraokcu/PINCE"}
                    img={Pince}
                    txt={"PINCE is a program most comparable to Cheat Engine on Windows. " +
                        "It allows for the initial debugging when reversing a running local application. " +
                        "I contributed code implementing a few things on the roadmap, such as allowing it to freeze" +
                        " values as well as adding some QOL improvements such as a progress bar and multithreading" +
                        " so the UI thread is not blocked."}
                />


            </SnakeBoxParent>


        </div>
    );
}
