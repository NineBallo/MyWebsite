import Typewriter from "typewriter-effect";

import Head from "next/head";
import Link from "next/link";

import {Card, Grid} from "../components/Grid";

import SIndex from "../styles/Pages/Index.module.css";
import SCommon from "../styles/Common.module.css";

export default function Home() {
  return (
    <div className={SCommon.container}>
      <Head>
        <title>My site!</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

        <div className={SIndex.headerImg}>
            <div className={SIndex.headerOverlay}>
                <div className={SIndex.blackTSBoxTitle}>
                    <h1 className={SCommon.title}>
                        {" "}
                        <Typewriter
                            options={{
                                strings: ["Nathaniel Dean", "NineBall"],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                                pauseFor: 2000,
                            }}
                        />
                    </h1>
                </div>
                <div className={SIndex.blackTSBoxDesc}>
                    <p className={SCommon.description}>
                        Student, developer, and questionable graphics designer.
                    </p>
                </div>
            </div>
      </div>

      <main>
          <Grid>
              <Card Link="/Projects" Title="My Projects" Description="An overview of my current public projects."/>

              <Card Link="/Volunteer" Title="Volunteer and Open-Source contributions"
                    Description="Here you can find some of the time I've contributed to the community."/>

              <Card Link="/Contact" Title="Contact Me" Description="If you wish to get in touch here is my contact info!"/>

              <Card Link="/AboutMe" Title="About Me" Description="Learn some more about me!"/>
          </Grid>
      </main>

        <footer>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/NineBallo/MyWebsite">
                <h4 className={SCommon.footerLink}>Made by ME!</h4>
            </a>
        </footer>
    </div>
  );
}
