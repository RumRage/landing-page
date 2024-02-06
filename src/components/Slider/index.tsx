"use client";

import React from "react";
import styles from "./styles.module.scss";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const Slider = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <div ref={sliderRef} className={styles.keen_slider}>
      <div className={`keen-slider__slide ${styles.slider}`}>
        <Image
          src="/assets/slider1.png"
          alt="Slider 1"
          width={731}
          height={641}
        />
      </div>
      <div className={`keen-slider__slide ${styles.slider}`}>
        <Image
          src="/assets/slider2.png"
          alt="Slider 2"
          width={731}
          height={641}
        />
      </div>
      <div className={`keen-slider__slide ${styles.slider}`}>
        <Image
          src="/assets/slider3.png"
          alt="Slider 3"
          width={731}
          height={641}
        />
      </div>
      <div className={`keen-slider__slide ${styles.slider}`}>
        <Image
          src="/assets/slider4.png"
          alt="Slider 4"
          width={731}
          height={641}
        />
      </div>
    </div>
  );
};

export default Slider;
