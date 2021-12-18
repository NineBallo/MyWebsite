import {useCallback, useEffect, useState} from "react";
import * as _ from "underscore";


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

//in px
let carouselHeight = 300;

function updateTranslate(pix) {
    carouselHeight = pix;
    console.log("Updated:" + pix)
}

function calcHeight() {
    const rect = this.Wrapper.getBoundingClientRect();

    return rect.height;
}

function componentDidMount() {
    window.addEventListener('resize', this.calcHeight());
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

    let buttonTranslate = (carouselHeight / 2)
    let buttonStyle = {};
    buttonStyle.transform = `translate:translateY(${buttonTranslate}px)`
    console.log(buttonTranslate)

    return (
        <div className={styles.carousel}>
                <div className={styles.showcaseWrapper}>
                    <div className={styles.showcase}>
                        <div className={styles.embla} ref={emblaRef}>
                            <a className={styles.slideContainer} href={link} style={style} target="_blank">
                                {props.children}
                            </a>
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
  