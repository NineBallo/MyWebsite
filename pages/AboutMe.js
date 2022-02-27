import Head from "next/head";

import {InfoChild, InfoParent} from "../components/TextBox";
import {Header} from "../components/Header";

import SCommon from "../styles/Common.module.css";

export default function AboutMe() {
    return (
        <div className={SCommon.container}>
            <Head>
                <title>About me!</title>
                <meta name="description" content="About me!"/>
            </Head>


            <Header goBackLink="/"
                    buttons={[
                        {Name: "Volunteer Work", Link: "/Volunteer"},
                        {Name: "Projects", Link: "/Projects"},
                        {Name: "Contact Me", Link: "/Contact"}
                    ]}
            />

            <div className={SCommon.titleSpacer}/>
            <h1 className={SCommon.title}>About Me!</h1>

            <InfoParent>
                <InfoChild
                    title={"Who am I?"}
                    desc={"I'm a high-school student and self-taught developer. I started programming when I was" +
                    " 12 on a hacked chromebook running linux." +
                    " The first language I learned was Python, followed by Javascript, and then my favorite C++. Ever since then my desire to learn" +
                    " has continued to grow, and with it my skillset."}
                />
                <InfoChild
                    title={"Why do I code?"}
                    desc={"I like to learn how things work and computers are such a broad and complicated topic." +
                    " Once I started coding I was hooked. Computers were a never ending rabbit-hole of new puzzles to learn, and techniques to adopt." +
                    " Eventually I saved up enough to buy a proper computer; From there I set out to learn even more" +
                    " advanced topics ranging from hacking, to computer graphics."}
                />
                <InfoChild
                    title={"What do I know now?"}
                    desc={"My language of choice is C++ however I also have learned JavaScript, Python, and some Rust. " +
                    "I've also spent time studying Vulkan, Docker, Next.js, and how the general memory subsystem of a computer works. " +
                    "As far as platforms go I've been using Linux as my daily driver for the last ~5 years and am very familiar with it "}
                />
                <InfoChild
                    title={"Where do I plan to go from here?"}
                    desc={"I have a long bucket-list but my focus right now is learning the more advanced math behind" +
                    " physically based lighting, sound, and physics. Eventually, I want to learn " +
                    " penetration testing, as well as dive deeper into assembly, and the reverse engineering of programs." +
                    " I would also like to understand how compilation works at a lower level, and use this knowledge to help" +
                    " protect servers, and applications from malicious code."}
                />
            </InfoParent>
            <footer>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/NineBallo/MyWebsite">
                    <h4 className={SCommon.footerLink}>Made by ME!</h4>
                </a>
            </footer>
        </div>
    );
}
