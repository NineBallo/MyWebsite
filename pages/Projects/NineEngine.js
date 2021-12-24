import styles from "../../styles/Home.module.css";
import cStyles from "../../styles/Carousel.module.css";
import pStyles from "../../styles/Projects.module.css";

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import {Carousel, Slide} from "../../components/Carousel";
import {Header} from "../../components/Header";

import {InfoChild, InfoParent} from "../../components/TextBox";


import showcase1 from "../../public/Projects/NineEngine/engine2.png";
import showcase2 from "../../public/Projects/NineEngine/engine4.png";

export default function NineEngine() {
    return (
        <div className={styles.container}>
            <Head>
                <title>NineEngine</title>
                <meta name="description" content="My custom game engine and renderer"/>
                <link rel="icon" href="/Assets/Site/logoTS.png"/>
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
                            quality={90}
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
                            quality={90}
                        />
                    </div>
                </Slide>
            </Carousel>

            <InfoParent>

                <InfoChild
                    title={"What is it?"}
                    desc={"I wanted to learn the Vulkan API and introduce myself to graphics programming so" +
                    " I created this project to learn it. So far I have created a simple" +
                    " renderer and learned the basics to Vulkan; I've also learned techniques for structuring large " +
                    " projects, and learned general graphics and UI programming techniques that I previously did not know."}
                />
                <InfoChild
                    title={"Features"}
                    desc={"I have implemented an IMGUI system for managing" +
                    " entity's loaded into the Entity Component System." +
                    " Eventually I want to theme and integrate it better into the renderers internals." +
                    " I've also implemented the Vulkan API as the current graphics protocol so that I can better learn" +
                    " the low-level workings of graphics programming."}
                />
                <InfoChild
                    title={"Plans"}
                    desc={"I plan on using this as an entrance project not only into more advanced graphics programming" +
                          " but also into things such as realistically simulated physics and sound."}
                />
                <InfoChild
                    title={"Goals"}
                    desc={"My goals are to learn as much as I can from it" +
                          " and apply those techniques to other projects I'm working on." +
                          " I hope however to achieve some level of realistic lighting and a basic" +
                          " implementation of physics by the time I'm done with it."}
                />
            </InfoParent>


        </div>
    );
}
