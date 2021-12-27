import Link from "next/link";
import Head from "next/head";

import {Header} from "../components/Header";
import {Card, Grid} from "../components/Grid";

import SCommon from "../styles/Common.module.css";


export default function ContactMe() {
    return (
        <div className={SCommon.container}>
            <Head>
                <title>Contact me!</title>
                <meta name="description" content="How to contact me"/>
            </Head>

            <Header goBackLink="/"
                    buttons={[
                        {Name: "Volunteer Work", Link: "/Volunteer"},
                        {Name: "Projects", Link: "/Projects"},
                        {Name: "About Me", Link: "/AboutMe"}
                    ]}
            />

            <div className={SCommon.titleSpacer}/>
            <h1 className={SCommon.title}>Contact Me!</h1>

            <Grid>
                <Card
                    Link={"mailto:NineBallCode@gmail.com"}
                    Title={"Mail"}
                    Description={"For any general or formal contacts this is be best."}
                    OffSite={true}
                />
                <Card
                    Link={"https://discord.com/users/279088726955655184"}
                    Title={"Discord"}
                    Description={"For any quick informal requests this is the fastest way to get to me."}
                    OffSite={true}
                />
                <Card
                    Link={"https://github.com/NineBallo"}
                    Title={"GitHub"}
                    Description={"To view the current state of my public projects this is where they will be."}
                    OffSite={true}
                />
                <Card
                    Link={"https://steamcommunity.com/id/NineBallo/"}
                    Title={"Steam"}
                    Description={"This is where I go to unwind, if you wish to hang out just add me."}
                    OffSite={true}
                />
            </Grid>


            <footer>
                <Link href="https://github.com/NineBallo/NewWebsite" passHref>
                    <h4 className={SCommon.footerLink}>Made by ME!</h4>
                </Link>
            </footer>
        </div>
    );
}
