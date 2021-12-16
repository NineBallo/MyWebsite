import styles from "../../styles/Home.module.css";
import cStyles from "../../styles/Carousel.module.css";
import pStyles from "../../styles/Projects.module.css";

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import {Carousel, Slide} from "../../components/Carousel";
import {Header} from "../../components/Header";

import {InfoChild, InfoParent} from "../../components/TextBox";


import showcase1 from "../../public/engine2.png";
import showcase2 from "../../public/engine4.png";

export default function ZipZorpBeebleBorp() {
  return (
      <div className={styles.container}>
        <Head>
          <title>ZipZorpBeebleBorp</title>
          <meta name="description" content="My entry into low level computing and hacking"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <Header goBackLink="/Projects">
          <Link href="/" passHref>
            <div className={styles.subpageButton}>
              <p>Home</p>
            </div>
          </Link>
          <Link href="/Contact" passHref>
            <div className={styles.subpageButton}>
              <p>Contact Me</p>
            </div>
          </Link>
          <Link href="/AboutMe" passHref>
            <div className={styles.subpageButton}>
              <p>About Me</p>
            </div>
          </Link>
        </Header>

        <div className={pStyles.titleSpacer}/>
        <h1 className={styles.title}>ZipZorpBeebleBorp</h1>


        <Carousel link={"https://github.com/NineBallo/ZipZorpBeedleBorp"}>
          <Slide>
            <div className={cStyles.image}>
              <Image
                  src={showcase1}
                  placeholder="blur"
                  layout="responsive"
              />
            </div>
          </Slide>
          <Slide>
            <div className={cStyles.image}>
              <Image
                  src={showcase2}
                  placeholder="blur"
                  layout="responsive"
              />
            </div>
          </Slide>
        </Carousel>

        <InfoParent>
            <InfoChild
                title={"What is it?"}
                desc={"It is a rudimentary CSGO cheat, it does not have the cleanest code or the most features but it" +
                " was my first real project in C++. Learning this solidified my C++ programming ability and taught me" +
                " a lot about how a computer functions."}
            />
          <InfoChild
              title={"Why?"}
              desc={"I wanted to learn how applications interacted with the OS and hardware, this project allowed me to" +
              " dive deep and discover the inner workings of the OS, Software, and provide some high level knowledge of how" +
              " the hardware functions"}
          />
          <InfoChild
              title={"What Skills Did I Learn"}
              desc={"From this project I better learned what compiling actually meant, I learned how to decompile" +
              " and reverse engineer programs; as well as mastering pointers, deepening my knowlege of C++, and" +
              " and learning how to count in both hexadecimal and binary"}
          />
          <InfoChild
              title={"Future of this project"}
              desc={"My goals were to use this as a learning experiment, maybe someday I will come back and" +
              " learn/implement some new technique's but for the time being this project will hopefully be " +
              " helpful to members of the open-source community who wish to learn off it, especially as there are not many" +
              " linux based cheats or exploits to study."}
          />
        </InfoParent>


      </div>
  );
}
