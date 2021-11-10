import styles from "../../styles/Home.module.css";
import pStyles from "../../styles/Projects.module.css";
import Carousel from "../../styles/Carousel.module.css";
import Link from "next/link";
import Head from "next/head";
import Images from "next/image";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function NineEngine() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ speed: 50, loop: true });

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

      <h1 className={styles.title}>NineEngine</h1>

      <p>
        This is a game engine and renderer I have been working on, it is the
        largest project I have undertaken on so far.
      </p>

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
              <img src="/engine2.png/" className={pStyles.image} />
              <div className={pStyles.textbox}>
                <p> WAWAWAWAWAW </p>
              </div>
            </div>

            <div className={pStyles.slide}>
              <img src="/engine4.png/" className={pStyles.image} />
            </div>
          </div>
        </div>
        <button className={pStyles.slideButton_prev} onClick={scrollPrev} />
        <button className={pStyles.slideButton_next} onClick={scrollNext} />
      </div>

      <p>
        In its current state it is a simple vulkan renderer with a basic imgui
        implementaion.
      </p>

      <footer>
        <h4>
          <Link href="/">Back to main &nbsp;</Link>

          <Link href="/projects">Back to projects</Link>
        </h4>
      </footer>
    </div>
  );
}
