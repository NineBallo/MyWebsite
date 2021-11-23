
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import pStyles from "../styles/Projects.module.css";


export function Slide({ children }) {
    return (
        <div className={pStyles.slide}>
            {children}
        </div>
    )
  }


  export function Carousel({ children }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ speed: 10, loop: true });

    const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);
    const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

      return (
        <div className={pStyles.showcase}>
        <div className={pStyles.embla} ref={emblaRef}>
          <div className={pStyles.slideContainer}>
              {children}
          </div>
        </div>
        <button className={pStyles.slideButton_prev} onClick={scrollPrev} />
        <button className={pStyles.slideButton_next} onClick={scrollNext} />
      </div>
      )
  }
  