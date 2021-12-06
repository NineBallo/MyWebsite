import styles from "../styles/Home.module.css";
import abstyles from "../styles/AboutMe.module.css";
import Link from "next/link";
import Head from "next/head";
import {Header} from "../components/Header";
import pStyles from "../styles/Projects.module.css";
import {InfoChild, InfoParent} from "../components/TextBox";


export default function AboutMe() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About me!</title>
                <meta name="description" content="About me!"/>
                <link rel="icon" href="/favicon.ico"/>
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
                <Link href="/Contact">
                    <div className={styles.subpageButton}>
                        <p>Contact Me</p>
                    </div>
                </Link>
                <Link href="/Projects">
                    <div className={styles.subpageButton}>
                        <p>My Projects</p>
                    </div>
                </Link>
            </Header>

            <div className={pStyles.titleSpacer}/>
            <h1 className={styles.title}>About Me!</h1>


            <InfoParent>
                <InfoChild>
                    <b>
                        Who am I?
                    </b>
                    <p>
                        Im a self taught high-school student who likes to code. I first started when I was 12 with Python
                        and a hacked chromebook running linux. Ever since then my desire to learn has been unfazed and
                        Ive been continuing to move onto more advanced topics one after the other.
                    </p>
                </InfoChild>
                <InfoChild>
                    <b>
                        Why do I code?
                    </b>
                    <p>
                        I like to learn how things work and computers are such a broad and complicated topic.
                        Once I started coding I was hooked, it was a never ending rabbit-hole of new stuff to learn.
                        Eventually it lead to me saving up to buy a proper computer and from there I set out to learn
                        every field I could.
                    </p>
                </InfoChild>
                <InfoChild>
                    <b>
                        What do I know now?
                    </b>
                    <p>
                        My language of choice is C++ however I also have learned JavaScript, Python, and some rust.
                        <br/ ><br/ >
                        Ive also spent time studying Vulkan, Docker, Next.js, and how the general memory subsystem of a computer works.
                        <br/ ><br/ >
                        As far as platforms go ive been using linux since I was 12, and understand the majority of it
                            quite well.
                    </p>
                </InfoChild>
                <InfoChild>
                    <b>
                        Where do I plan to go from here?
                    </b>
                    <p>
                        I have a long bucketlist but my focus right now is learning the more advanced math behind
                        physically based lighting, sound, and physics. Eventually I also want to try learning
                        penetration testing again, and learn how to better reverse engineer programs because
                        understanding how to protect a server from malicious actors as well my code I believe
                        is an important skill to have.
                    </p>
                </InfoChild>
            </InfoParent>


        </div>
    );
}
