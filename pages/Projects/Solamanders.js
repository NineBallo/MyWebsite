import styles from "../../styles/Home.module.css";
import cStyles from "../../styles/Carousel.module.css";
import pStyles from "../../styles/Projects.module.css";

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import {Carousel, Slide} from "../../components/Carousel";
import {Header} from "../../components/Header";

import {InfoChild, InfoParent} from "../../components/TextBox";


import BabyMander from "../../public/Projects/Solamanders/BabyMander.png";
import Gen1Mander from "../../public/Projects/Solamanders/Gen1Mander.png";
import TerrariumTank from "../../public/Projects/Solamanders/TTank.png";

export default function Solamanders() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Solamanders</title>
                <meta name="description" content="My first commission project"/>
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
            <h1 className={styles.title}>Solamanders</h1>


            <Carousel link={"https://solamanders.com/"}>
                <Slide>
                    <div className={cStyles.image}>
                        <Image
                            src={BabyMander}
                            alt="Le engio"
                            placeholder="blur"
                            layout="responsive"
                            quality={90}
                        />
                    </div>
                </Slide>
                <Slide>
                    <div className={cStyles.image}>
                        <Image
                            src={TerrariumTank}
                            alt="Le engio"
                            placeholder="blur"
                            layout="responsive"
                            quality={90}
                        />
                    </div>
                </Slide>
                <Slide>
                    <div className={cStyles.image}>
                        <Image
                            src={Gen1Mander}
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
                    title={"The Who?"}
                    desc={"The main team consists of 5 people, I was one of the first outside of that group brought onto" +
                    " the project by one of the main devs and friend to help get the project started."}
                />
                <InfoChild
                    title={"The What?"}
                    desc={"It is a NFT project consisting of three releases, the first being 10000 randomly generated NFT" +
                    " salamanders, these salamanders with the help of another drop of NFT \"Terrarium Tanks\" allowed" +
                    " people to breed those initial 10000 into other \"Gen 2\" Baby Solamanders."}
                />

                <InfoChild
                    title={"The Why?"}
                    desc={"I had wanted to learn how blockchain applications were programmed and how the ecosystem " +
                    "functioned. I had been planning to dip my toes into blockchain based programming and once I was" +
                    " offered to work on this project I took the opportunity to learn how things work."}
                />
                <InfoChild
                    title={"Genetics"}
                    desc={"I implemented and helped create the algorithm for breeding. This is what allows Gen 1 'manders" +
                    " to be bred into Gen2 Baby-Manders. It allows for parent traits to be passed down genetically" +
                    " based on a set of factors. This system gives people control over their 'manders and lets" +
                    " them have some control over what the Gen2 will look like."}
                />
                <InfoChild

                title={"Solana"}
                desc={"This project was built on the Solana blockchain and therefore carries many of the benefits of that;" +
                " such as the low transaction fees, quick transaction speeds, and a relatively nice dev environment/community."}
            />
            </InfoParent>


        </div>
    );
}
