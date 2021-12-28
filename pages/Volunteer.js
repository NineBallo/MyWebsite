import Head from "next/head";

import {Header} from "../components/Header";
import {SnakeBoxChild, SnakeBoxParent} from "../components/TextBox";

import SCommon from "../styles/Common.module.css";

import Pince from "../public/Volunteer/PINCE.webp";
import OpenRGB from "../public/Volunteer/OpenRGB.webp";
import SlamBKB from "../public/Volunteer/SLAM.webp"
import Fest from "../public/Volunteer/CFest.webp"

export default function Volunteer() {
    return (
        <div className={SCommon.container}>
            <Head>
                <title>Volunteer Work</title>
                <meta
                    name="description"
                    content="Some of the time ive dedicated to the community"
                />
            </Head>

            <Header goBackLink="/"
                    buttons={[
                        {Name: "Projects", Link: "/Projects"},
                        {Name: "Contact Me", Link: "/Contact"},
                        {Name: "About Me", Link: "/AboutMe"}
                    ]}
            />

            <div className={SCommon.titleSpacer}/>
            <h1 className={SCommon.title}>Volunteer Work</h1>

            <SnakeBoxParent>
                <SnakeBoxChild
                    img={SlamBKB}
                    link={"http://www.stalbertslam.com/"}
                    txt={"SLAM is a community basketball league that works to create a fun environment where" +
                    " new players can get into the sport. I'm currently volunteering for St.Albert SLAM as an Assistant" +
                    " Coach."}
                    tag={"SLAM"}
                />

                <SnakeBoxChild
                    link={"https://stalbert.ca/exp/childfest/"}
                    img={Fest}
                    txt={"I've volunteered to help run the Children's Festival. The Children's Festival is a event that" +
                    " the city of St.Albert holds in order to engage kids in the arts and help bring the community together."}
                    tag={"Children's Festival"}
                />

                <SnakeBoxChild
                    link={"https://gitlab.com/CalcProgrammer1/OpenRGB"}
                    img={OpenRGB}
                    txt={"OpenRGB is an open-source, cross-platform way of combining" +
                    " all the silly proprietary RGB programs into one. For this I added support for my mouse: The Logitech G403 Hero." +
                    " This while a small contribution was my first ever contribution to any open-source software."}
                    tag={"OpenRGB"}
                />

                <SnakeBoxChild
                    link={"https://github.com/korcankaraokcu/PINCE"}
                    img={Pince}
                    txt={"PINCE is a program most comparable to Cheat Engine on Windows." +
                    " It allows for the initial debugging when reversing a running local application." +
                    " I contributed code implementing a few things on the roadmap, such as allowing it to freeze" +
                    " values as well as adding some QOL improvements such as a progress bar and multithreading" +
                    " so the UI thread and remains responsive during operations."}
                    tag={"PINCE"}
                />


            </SnakeBoxParent>


        </div>
    );
}
