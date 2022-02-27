import Head from "next/head";

import {Header} from "../components/Header";
import {SnakeBoxChild, SnakeBoxParent} from "../components/TextBox";

import SCommon from "../styles/Common.module.css";

import Pince from "../public/Volunteer/PINCE.webp";
import OpenRGB from "../public/Volunteer/OpenRGB.webp";
import SlamBKB from "../public/Volunteer/SLAM.webp"
import Fest from "../public/Volunteer/CFest.webp"
import Northlands from "../public/Volunteer/Northlands.webp"
import Link from "next/link";

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
                    txt={"I've volunteered for the St.Albert Children's Festival. The Children's Festival is a event that" +
                    " the city of St.Albert holds in order to engage kids in the arts and help bring the community together."}
                    tag={"Children's Festival"}
                />

                <SnakeBoxChild
                    link={"https://northlands.com/?page_id=207722"}
                    img={Northlands}
                    txt={"I've volunteered for Northlands on many occasions. Most of my time was spent as a Youth/Ag Ambassador" +
                    " but I also helped out during other events such as KDays. The majority of my role at Northlands included" +
                    " interacting with guests, teaching people about the exhibits, and answering people's questions." +
                    " The rest of our time was spent cleaning up and caring for the animals during events such as Farmfair"}
                    tag={"Northlands"}
                />

                <SnakeBoxChild
                    link={"https://gitlab.com/CalcProgrammer1/OpenRGB"}
                    img={OpenRGB}
                    txt={"OpenRGB is an open-source, cross-platform way of combining" +
                    " all the silly proprietary RGB programs into one. For this I added support for my mouse: The Logitech G403 Hero." +
                    " This while a small contribution was my first contribution to any open-source software."}
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

            <footer>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/NineBallo/MyWebsite">
                    <h4 className={SCommon.footerLink}>Made by ME!</h4>
                </a>
            </footer>
        </div>
    );
}
