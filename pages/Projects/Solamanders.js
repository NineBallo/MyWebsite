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

export default function Solamanders() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Solamanders</title>
                <meta name="description" content="My first commission project"/>
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
            <h1 className={styles.title}>Solamanders</h1>


            <Carousel link={"https://solamanders.com/"}>
                <Slide>
                    <div className={cStyles.image}>
                        <Image
                            src={showcase1}
                            alt="Le engio"
                            placeholder="blur"
                            layout="responsive"
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
                    title={"The Who?"}
                    desc={"    The main team consists of 5 people, I was one of the first outside of that group brought onto" +
                    " the project by one of the main devs and friend to help get the project off the ground."}
                />
                <InfoChild
                    title={"The What?"}
                    desc={"    It is a project consisting of three releases, the first being 10000 randomly generated NFT" +
                    " salamanders, these salamanders with the help of another drop of NFT \"Terrarium Tanks\" allowed" +
                    " people to breed those initial 10000 into other \"Gen 2\" Solamanders."}
                />

                <InfoChild
                    title={"The Why?"}
                    desc={"    I had wanted to learn how blockchain applications were programmed and how the ecosystem " +
                    "functioned, I had been planning to dip my toes into it and once I was offered to work on this " +
                    "project I took the opportunity to learn how everything works."}
                />
                <InfoChild
                    title={"Genetics"}
                    desc={"    I helped create and implement the algorithm for breeding that allows traits to be passed down " +
                    "genetically based on a set of factors. This system gives people control over their 'manders and lets " +
                    "them have the highest change of getting exactly what they want."}
                />
                <InfoChild

                title={"Solana"}
                desc={"This project was built on the Solana blockchain and therefor carries many of the benefits of that; " +
                "such as the low transaction fees, quick transaction speeds, and a relatively nice dev environment/community."}
            />
            </InfoParent>


        </div>
    );
}
