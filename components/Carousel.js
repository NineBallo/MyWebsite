import Image from "next/image";

import {useCallback} from "react";
import useEmblaCarousel from "embla-carousel-react";

import styles from "../styles/Carousel.module.css";

import buttonNext from "../public/Assets/SlideShow/slideShowNext.png";
import buttonPrev from "../public/Assets/SlideShow/slideShowBack.png";

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
                        layout="responsive"
                        priority={true}
                        loading={"eager"}
                    />
                </button>
                <button className={styles.slideButton_next} onClick={scrollNext}>
                    <Image
                        src={buttonNext}
                        alt="Next"
                        placeholder="blur"
                        layout="responsive"
                        priority={true}
                        loading={"eager"}
                    />
                </button>
        </div>
    )
}
  