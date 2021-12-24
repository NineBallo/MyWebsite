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
            </Head>

            <Header>
                <Link href="/Volunteer" passHref>
                    <div className={styles.subpageButton}>
                        <p>Volunteer Work</p>
                    </div>
                </Link>
                <Link href="/Contact" passHref>
                    <div className={styles.subpageButton}>
                        <p>Contact Me</p>
                    </div>
                </Link>
                <Link href="/Projects" passHref>
                    <div className={styles.subpageButton}>
                        <p>My Projects</p>
                    </div>
                </Link>
            </Header>

            <div className={pStyles.titleSpacer}/>
            <h1 className={styles.title}>About Me!</h1>

            <InfoParent>
                <InfoChild
                    title={"Who am I?"}
                    desc={"I'm a self taught high-school student who likes to code. I first started when I was 12, on a" +
                        " hacked chromebook running linux. Ever since then my desire to learn has continued to grow and" +
                        " I've been continuing to move onto more advanced topics one after the other."}
                />
                <InfoChild
                    title={"Why do I code?"}
                    desc={"I like to learn how things work and computers are such a broad and complicated topic." +
                        " Once I started coding I was hooked, it was a never ending rabbit-hole of new stuff to feed my curiosity." +
                        " Eventually I saved up enough to buy a proper computer, and from there I set out to learn even more" +
                        " advanced topics ranging from hacking to computer graphics."}
                />
                <InfoChild
                    title={"What do I know now?"}
                    desc={"My language of choice is C++ however I also have learned JavaScript, Python, and some Rust. " +
                        "I've also spent time studying Vulkan, Docker, Next.js, and how the general memory subsystem of a computer works. " +
                        "As far as platforms go I've been using Linux since I was 12, and understand the majority of it " +
                        "quite well."}
                />
                <InfoChild
                    title={"Where do I plan to go from here?"}
                    desc={"I have a long bucket-list but my focus right now is learning the more advanced math behind" +
                        " physically based lighting, sound, and physics. Eventually, I want to learn " +
                        " penetration testing, as well as dive deeper into assembly and the reverse engineering of programs." +
                        " I would also like to understand how compilation works at a lower level and use this knowledge to help" +
                        " protect servers and applications from malicious code."}
                />
            </InfoParent>
        </div>
    );
}
