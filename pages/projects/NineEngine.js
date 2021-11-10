import styles from "../../styles/Home.module.css";
import pStyles from "../../styles/Projects.module.css";
import Carousel from "../../styles/Carousel.module.css";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import showcase1 from "../../public/engine2.png";
import showcase2 from "../../public/engine4.png";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function NineEngine() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ speed: 10, loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={styles.container}>
      <Head>
        <title>NineEngine</title>
        <meta name="description" content="My custom game engine and renderer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={pStyles.projectHeader}>
        <div className={styles.headerNameBox}>
          <h2 className={styles.subpageName}>go back</h2>
        </div>

        <div className={pStyles.headerButtonBox}>
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
        </div>
      </header>

      <h1 className={styles.title}>NineEngine</h1>

      <div className={pStyles.showcase}>
        <div className={pStyles.embla} ref={emblaRef}>
          <div className={pStyles.slideContainer}>
            <div className={pStyles.slide}>
              <div className={pStyles.textbox}>
                <p style={{ display: "inline-block" }}>
                  This is a "toy" engine I have been working on for the last
                  year. It is intended to be a learning exercise into computer
                  graphics and eventually physics.
                </p>
              </div>
              <div className={pStyles.image}>
                <Image
                  src={showcase1}
                  alt="Le engio"
                  placeholder="blur"
                  layout="responsive"
                />
              </div>
              <div className={pStyles.textbox}>
                <p style={{ display: "inline-block" }}>
                  A focus on learning many apis and creating something a game
                  could realistically be made with.
                </p>
              </div>
            </div>

            <div className={pStyles.slide}>
              <div className={pStyles.textbox}>
                <p style={{ display: "inline-block" }}>
                  This is a "toy" engine I have been working on for the last
                  year. It is intended to be a learning exercise into computer
                  graphics and eventually physics.
                </p>
              </div>
              <div className={pStyles.image}>
                <Image
                  src={showcase2}
                  alt="Le engio"
                  placeholder="blur"
                  layout="responsive"
                />
              </div>

              <div className={pStyles.textbox}>
                <p style={{ display: "inline-block" }}>
                  It is currently a simple renderer with basic shading but
                  eventually I would like to implement physics and phycally
                  based audio{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className={pStyles.slideButton_prev} onClick={scrollPrev} />
        <button className={pStyles.slideButton_next} onClick={scrollNext} />
      </div>

      <footer>
        <Link href="https://github.com/NineBallo/NewWebsite">
          <h4 className={styles.footerLink}>Made by ME!</h4>
        </Link>
      </footer>
    </div>
  );
}
