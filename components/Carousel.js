import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "../styles/Carousel.module.css";
import Image from "next/image";
import showcase1 from "../public/engine2.png";

import buttonNext from "../public/slideShowNext.png";
import buttonPrev from "../public/slideShowBack.png";


export function Slide({ children }) {
    return (
        <div className={styles.slide}>
            {children}
        </div>
    )
  }


  export function Carousel({ children }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ speed: 5, loop: true });

    const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);
    const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

      return (
          <div className={styles.showcaseWrapper}>
            <div className={styles.showcase}>
              <div className={styles.embla} ref={emblaRef}>
                <div className={styles.slideContainer}>
                  {children}
                </div>
              </div>
         </div>


            <button className={styles.slideButton_prev} onClick={scrollPrev}>
              <Image
                  src={buttonPrev}
                  alt="Prev"
                  placeholder="blur"
                  layout="responsive"/>
            </button>
            <button className={styles.slideButton_next} onClick={scrollNext}>
              <Image
                  src={buttonNext}
                  alt="Next"
                  placeholder="blur"
                  layout="responsive"/>
            </button>
          </div>
      )
  }
  