import Link from "next/link";
import Head from "next/head";

import {Header} from "../components/Header";
import {ContactCard} from "../components/TextBox";


import SCommon from "../styles/Common.module.css";
import SHeader from "../styles/Components/Header.module.css";



export default function ContactMe() {
  return (
    <div className={SCommon.container}>
      <Head>
        <title>Contact me!</title>
        <meta name="description" content="How to contact me" />
      </Head>

        <Header goBackLink="/"
                buttons={[
                    {Name: "Volunteer Work", Link: "/Volunteer" },
                    {Name: "Projects", Link: "/Projects"},
                    {Name: "About Me", Link: "/AboutMe"}
                ]}
        />

      <div className={SCommon.titleSpacer}/>
      <h1 className={SCommon.title}>Contact Me!</h1>

      <div className={SCommon.grid}>
        <ContactCard
            link={"mailto:NineBallCode@gmail.com"}
            title={"Mail"}
            desc={"For any general or formal contacts this is be best."}
        />
        <ContactCard
            link={"https://discord.com/users/279088726955655184"}
            title={"Discord"}
            desc={"For any quick informal requests this is the fastest way to get to me."}
        />
        <ContactCard
            link={"https://github.com/NineBallo"}
            title={"GitHub"}
            desc={"To view the current state of my public projects this is where they will be."}
        />
        <ContactCard
            link={"https://steamcommunity.com/id/NineBallo/"}
            title={"Steam"}
            desc={"This is where I go to unwind, if you wish to hang out just add me."}
        />
      </div>


        <footer>
            <Link href="https://github.com/NineBallo/NewWebsite" passHref>
                <h4 className={SCommon.footerLink}>Made by ME!</h4>
            </Link>
        </footer>
    </div>
  );
}
