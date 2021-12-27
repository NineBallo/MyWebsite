import Link from "next/link";
import Head from "next/head";

import {Header} from "../components/Header";
import {Card, Grid} from "../components/Grid";

import SCommon from "../styles/Common.module.css";

export default function Projects() {
    return (
        <div className={SCommon.container}>
            <Head>
                <title>My Projects!</title>
                <meta
                    name="description"
                    content="A list of my currently public projects"
                />
            </Head>


            <Header goBackLink="/"
                    buttons={[
                        {Name: "Volunteer Work", Link: "/Volunteer"},
                        {Name: "Contact Me", Link: "/Contact"},
                        {Name: "About Me", Link: "/AboutMe"}
                    ]}
            />

            <div className={SCommon.titleSpacer}/>
            <h1 className={SCommon.title}>My Projects</h1>

            <Grid>
                <Card Link="/Projects/NineEngine" Title="NineEngine"
                      Description="Entry into graphics programming and game engine development."/>

                <Card Link="/Projects/ZipZorpBeedleBorp" Title="ZipZorpBeedleBorp"
                      Description="Exploring the memory subsystem of a OS."/>

                <Card Link="/Projects/Solamanders" Title="Solamanders"
                      Description="A commissioned NFT project I worked on. Implements basic genetics, and family trees."/>
            </Grid>

            <footer>
                <Link href="https://github.com/NineBallo/MyWebsite" passHref>
                    <h4 className={SCommon.footerLink}>Made by ME!</h4>
                </Link>
            </footer>
        </div>
    );
}
