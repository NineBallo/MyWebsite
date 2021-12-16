import React, {useCallback} from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "../styles/Carousel.module.css";
import Image from "next/image";

import buttonNext from "../public/slideShowNext.png";
import buttonPrev from "../public/slideShowBack.png";


export function Slide({children}) {
    return (
        <div className={styles.slide}>
            {children}
        </div>
    )
}


export function Carousel(props) {
    const [emblaRef, emblaApi] = useEmblaCarousel({speed: 5, loop: true});

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);


    let link = undefined;
    let style = {};
    if (props.link) {
        link = props.link;
        style.cursor = "pointer";
    } else {
        style.cursor = "initial";
    }
    return (
        <div className={styles.carousel}>
            <a href={link} style={style} target="_blank">
                <div className={styles.showcaseWrapper}>
                    <div className={styles.showcase}>
                        <div className={styles.embla} ref={emblaRef}>
                            <div className={styles.slideContainer}>
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </a>

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
  