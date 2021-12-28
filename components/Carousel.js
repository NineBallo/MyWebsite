import Image from "next/image";

import {useCallback} from "react";
import useEmblaCarousel from "embla-carousel-react";

import SCarousel from "../styles/Components/Carousel.module.css";

import buttonNext from "../public/Assets/SlideShow/SlideNext.webp";
import buttonPrev from "../public/Assets/SlideShow/SlideBack.webp";

export function Slide({children}) {
    return (
        <div className={SCarousel.slide}>
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
        <div className={SCarousel.carousel}>

            <div className={SCarousel.showcaseWrapper}>
                <div className={SCarousel.showcase}>
                    <div className={SCarousel.embla} ref={emblaRef}>
                        <a className={SCarousel.slideContainer} href={link} style={style} target="_blank"
                           rel="noopener noreferrer">
                            {props.children}
                        </a>
                    </div>
                </div>
            </div>


            <button className={SCarousel.slideButton_prev} onClick={scrollPrev}>
                <Image
                    src={buttonPrev}
                    alt="Prev"
                    placeholder="blur"
                    layout="responsive"
                    priority={true}
                    loading={"eager"}
                    quality={85}
                />
            </button>
            <button className={SCarousel.slideButton_next} onClick={scrollNext}>
                <Image
                    src={buttonNext}
                    alt="Next"
                    placeholder="blur"
                    layout="responsive"
                    priority={true}
                    loading={"eager"}
                    quality={85}
                />
            </button>
        </div>
    )
}
  