import Head from "next/head";
import Image from "next/image";

import {Carousel, Slide} from "../../components/Carousel";
import {Header} from "../../components/Header";
import {InfoChild, InfoParent} from "../../components/TextBox";

import SCommon from "../../styles/Common.module.css";
import SCarousel from "../../styles/Components/Carousel.module.css"; //TODO turn slides into proper component

import BabyMander from "../../public/Projects/Solamanders/BabyMander.webp";
import Gen1Mander from "../../public/Projects/Solamanders/Gen1Mander.webp";
import TerrariumTank from "../../public/Projects/Solamanders/TTank.webp";
import Link from "next/link";

export default function Solamanders() {
    return (
        <div className={SCommon.container}>
            <Head>
                <title>Solamanders</title>
                <meta name="description" content="My first commission project"/>
            </Head>

            <Header goBackLink="/Projects"
                    buttons={[
                        {Name: "Home", Link: "/"},
                        {Name: "Contact Me", Link: "/Contact"},
                        {Name: "About Me", Link: "/AboutMe"}
                    ]}
            />

            <div className={SCommon.titleSpacer}/>
            <h1 className={SCommon.title}>Solamanders</h1>

            <Carousel link={"https://solamanders.com/"}>
                <Slide>
                    <div className={SCarousel.image}>
                        <Image
                            src={BabyMander}
                            alt=""
                            placeholder="blur"
                            layout="responsive"
                        />
                    </div>
                </Slide>
                <Slide>
                    <div className={SCarousel.image}>
                        <Image
                            src={TerrariumTank}
                            alt=""
                            placeholder="blur"
                            layout="responsive"
                        />
                    </div>
                </Slide>
                <Slide>
                    <div className={SCarousel.image}>
                        <Image
                            src={Gen1Mander}
                            alt=""
                            placeholder="blur"
                            layout="responsive"
                        />
                    </div>
                </Slide>
            </Carousel>

            <InfoParent>
                <InfoChild
                    title={"The Who?"}
                    desc={"The main team consists of 5 people, I was one of the first outside of that initial group" +
                    "  brought onto the project. I was brought on by one of the main devs (and friend) to help out on the project."}
                />
                <InfoChild
                    title={"What is it?"}
                    desc={"This is a NFT project consisting of three releases, the first being 10000 randomly generated NFT" +
                    " salamanders, these salamanders with the help of another drop of NFT \"Terrarium Tanks\" allowed" +
                    " people to breed those initial 10000 into 5000 other \"Gen 2\" Baby Solamanders carrying over" +
                    " traits from the parents."}
                />

                <InfoChild
                    title={"Why did I work on this?"}
                    desc={"I wanted to learn how blockchain applications were programmed and how the ecosystem " +
                    "functioned. I had been planning to dip my toes into blockchain based programming and once I was" +
                    " offered to work on this project I took the opportunity to learn how things work."}
                />
                <InfoChild
                    title={"Genetics"}
                    desc={"I implemented and helped create the algorithm for breeding. This is what allows Gen 1 Solamanders" +
                    " to be bred into Gen2 Baby-Manders. It allows for parent traits to be passed down genetically" +
                    " based on a set of factors. This system gives people control over their Solamanders and lets" +
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
