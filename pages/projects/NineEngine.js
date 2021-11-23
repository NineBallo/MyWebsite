import styles from "../../styles/Home.module.css";
import pStyles from "../../styles/Projects.module.css";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import {Carousel, Slide} from "../../components/Carousel";
import {Header} from "../../components/Header";

import showcase1 from "../../public/engine2.png";
import showcase2 from "../../public/engine4.png";

export default function NineEngine() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NineEngine</title>
        <meta name="description" content="My custom game engine and renderer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
      <Link href="/">
            <div className={styles.subpageButton}>
              <p>Main</p>
            </div>
          </Link>
          <Link href="/contact">
            <div className={styles.subpageButton}>
              <p>Contact Me</p>
            </div>
          </Link>
          <Link href="/aboutme">
            <div className={styles.subpageButton}>
              <p>About Me</p>
            </div>
          </Link>
      </Header>
      
      <h1 className={styles.title}>NineEngine</h1>


    <Carousel>
      <Slide>
        <div className={pStyles.image}>
          <Image
            src={showcase1}
            alt="Le engio"
            placeholder="blur"
            layout="responsive"
          />
        </div>
      </Slide>
      <Slide>
        <div className={pStyles.image}>
          <Image
            src={showcase2}
            alt="Le engio"
            placeholder="blur"
            layout="responsive"
          />
        </div>
      </Slide>
    </Carousel>

    </div>
  );
}
