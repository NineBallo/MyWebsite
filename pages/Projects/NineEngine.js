import styles from "../../styles/Home.module.css";
import cStyles from "../../styles/Carousel.module.css";
import pStyles from "../../styles/Projects.module.css";

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import {Carousel, Slide} from "../../components/Carousel";
import {Header} from "../../components/Header";

import {InfoChild, InfoParent} from "../../components/TextBox";


import showcase1 from "../../public/engine2.png";
import showcase2 from "../../public/engine4.png";

export default function NineEngine() {
    return (
        <div className={styles.container}>
            <Head>
                <title>NineEngine</title>
                <meta name="description" content="My custom game engine and renderer"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header goBackLink="/Projects">
                <Link href="/" passHref>
                    <div className={styles.subpageButton}>
                        <p>Home</p>
                    </div>
                </Link>
                <Link href="/Contact" passHref>
                    <div className={styles.subpageButton}>
                        <p>Contact Me</p>
                    </div>
                </Link>
                <Link href="/AboutMe" passHref>
                    <div className={styles.subpageButton}>
                        <p>About Me</p>
                    </div>
                </Link>
            </Header>

            <div className={pStyles.titleSpacer}/>
            <h1 className={styles.title}>NineEngine</h1>


            <Carousel link={"https://github.com/NineBallo/NineEngine"}>
                <Slide>
                    <div className={cStyles.image}>
                        <Image
                            src={showcase1}
                            alt="Le engio"
                            placeholder="blur"
                            layout="responsive"
                            priority={true}
                        />
                    </div>
                </Slide>
                <Slide>
                    <div className={cStyles.image}>
                        <Image
                            src={showcase2}
                            alt="Le engio"
                            placeholder="blur"
                            layout="responsive"
                        />
                    </div>
                </Slide>
            </Carousel>

            <InfoParent>
                <InfoChild

                    title={"Vulkan API"}
                    desc={"I wanted to learn the Vulkan API so\n" +
                    "I created this project to learn it. So far I have created a simple\n" +
                    "renderer and learned not just vulkan but techniques for\n" +
                    "graphics and UI programming as a whole."}
                />
                <InfoChild
                    title={"GUI"}
                    desc={"I have implemented a IMGUI system for managing\n" +
                    "entity's loaded into the Entity Component System.\n" +
                    "Eventually I want to theme and integrate it better into the renderers internals."}
                />
                <InfoChild

                    title={"Plans"}
                    desc={"I plan on using this as a entrance project not only into more advanced graphics programming " +
                          "but also into things such as physics and sound programming."}
                />
                <InfoChild
                    title={"Goals"}
                    desc={"My goals are to learn as much as I can from it" +
                          "and apply those techniques to other projects im working on." +
                          "I hope however to achieve some level of realistic lighting and a basic" +
                          "implementation of physics."}
                />
            </InfoParent>


        </div>
    );
}
