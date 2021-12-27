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
                    desc={"I'm a high-school student and self taught developer. I first started when I was 12, on a" +
                    " hacked chromebook running linux. Ever since then my desire to learn has continued to grow and" +
                    " I've been continuing to move onto more advanced topics one after the other."}
                />
                <InfoChild
                    title={"Why do I code?"}
                    desc={"I like to learn how things work and computers are such a broad and complicated topic." +
                    " Once I started coding I was hooked, it was a never ending rabbit-hole of new stuff to feed my curiosity." +
                    " Eventually I saved up enough to buy a proper computer; From there I set out to learn even more" +
                    " advanced topics ranging from hacking, to computer graphics, to web design."}
                />
                <InfoChild
                    title={"What do I know now?"}
                    desc={"My language of choice is C++ however I also have learned JavaScript, Python, and some Rust. " +
                    "I've also spent time studying Vulkan, Docker, Next.js, and how the general memory subsystem of a computer works. " +
                    "As far as platforms go I've been using Linux since I was 12 and am quite familiar with it "}
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
