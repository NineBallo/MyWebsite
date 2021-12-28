import Head from "next/head";
import Image from "next/image";

import {Carousel, Slide} from "../../components/Carousel";
import {Header} from "../../components/Header";
import {InfoChild, InfoParent} from "../../components/TextBox";

import SCommon from "../../styles/Common.module.css";
import SCarousel from "../../styles/Components/Carousel.module.css";

import showcase1 from "../../public/Projects/NineEngine/engine2.webp";
import showcase2 from "../../public/Projects/NineEngine/engine4.webp";

export default function NineEngine() {
    return (
        <div className={SCommon.container}>
            <Head>
                <title>NineEngine</title>
                <meta name="description" content="My custom game engine and renderer"/>
            </Head>

            <Header goBackLink="/Projects"
                    buttons={[
                        {Name: "Home", Link: "/"},
                        {Name: "Contact Me", Link: "/Contact"},
                        {Name: "About Me", Link: "/AboutMe"}
                    ]}
            />

            <div className={SCommon.titleSpacer}/>
            <h1 className={SCommon.title}>NineEngine</h1>

            <Carousel link={"https://github.com/NineBallo/NineEngine"}>
                <Slide>
                    <div className={SCarousel.image}>
                        <Image
                            src={showcase1}
                            alt="Well this is supposed to be a picture of my engine"
                            placeholder="blur"
                            layout="responsive"
                            priority={true}
                            quality={85}
                        />
                    </div>
                </Slide>
                <Slide>
                    <div className={SCarousel.image}>
                        <Image
                            src={showcase2}
                            alt="Well this is supposed to be a picture of my engine"
                            placeholder="blur"
                            layout="responsive"
                            quality={85}
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
                    " projects, and learned general graphics and UI programming techniques that I previously didn't know."}
                />
                <InfoChild
                    title={"Features"}
                    desc={"I have implemented an IMGUI layer for managing" +
                    " entity's loaded into the Engines ECS." +
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
