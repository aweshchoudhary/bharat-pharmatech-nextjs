"use client";
import { useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ImgInterface } from "@/interfaces/types";
import { getCldImageUrl } from "next-cloudinary";
import { cn } from "@/lib/utils";
// import { Icon } from "@iconify/react/dist/iconify.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductImageSlider = ({ imgs }: { imgs: ImgInterface[] }) => {
  let mainSliderRef = useRef<any | null>(null);
  let thumbSliderRef = useRef<any | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [mainSlideFocus, setIsMainSlideFocus] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => {
      "slickGoTo" in thumbSliderRef &&
      typeof thumbSliderRef.slickGoTo === "function"
        ? thumbSliderRef?.slickGoTo(next)
        : null;
    },
  };

  const thumbSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    focusOnSelect: false,
    centerPadding: "0",
  };

  return (
    <div className="shrink-0 w-full">
      <div
        className="md:mb-5 mb-2 relative"
        onMouseEnter={() => setIsMainSlideFocus(true)}
        onMouseLeave={() => setIsMainSlideFocus(false)}
      >
        <Slider
          ref={(slider: any) => {
            mainSliderRef = slider;
          }}
          {...settings}
        >
          {imgs.map((img, index) => (
            <MainSlide img={img} key={index} priority={index === 0} />
          ))}
        </Slider>
        {mainSlideFocus ? (
          <>
            <button
              onClick={() =>
                "slickPrev" in mainSliderRef &&
                typeof mainSliderRef.slickPrev === "function"
                  ? mainSliderRef?.slickPrev()
                  : null
              }
              className="md:flex absolute hidden items-center justify-center md:left-5 left-3 top-1/2 w-14 h-14 border bg-primary rounded-lg overflow-hidden -translate-y-1/2 z-50"
            >
              <Icon
                icon="bi:arrow-left"
                className="text-2xl text-primary-foreground"
              />
            </button>
            <button
              onClick={() =>
                "slickPrev" in mainSliderRef &&
                typeof mainSliderRef.slickPrev === "function"
                  ? mainSliderRef?.slickPrev()
                  : null
              }
              className="md:flex absolute hidden items-center justify-center md:right-5 right-3 top-1/2 w-14 h-14 border bg-primary rounded-lg overflow-hidden -translate-y-1/2 z-50"
            >
              <Icon
                icon="bi:arrow-right"
                className="text-2xl text-primary-foreground"
              />
            </button>
          </>
        ) : null}
      </div>

      <div className="thumb-slider-container">
        <Slider
          ref={(slider: any) => {
            thumbSliderRef = slider;
          }}
          {...thumbSettings}
          beforeChange={(current, next) => {
            "slickGoTo" in mainSliderRef &&
            typeof mainSliderRef.slickGoTo === "function"
              ? mainSliderRef?.slickGoTo(next)
              : null;
            setActiveSlide(next);
          }}
        >
          {imgs.map((img, key) => {
            return (
              <div
                key={key}
                onClick={() => {
                  if (
                    "slickGoTo" in mainSliderRef &&
                    typeof mainSliderRef.slickGoTo === "function"
                  ) {
                    mainSliderRef?.slickGoTo(key);
                  }
                  if (
                    "slickGoTo" in thumbSliderRef &&
                    typeof thumbSliderRef.slickGoTo === "function"
                  ) {
                    setActiveSlide(key);
                    thumbSliderRef.slickGoTo(key);
                  }
                }}
              >
                <ThumbSlide activeSlide={activeSlide} index={key} img={img} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

const MainSlide = ({
  img,
  priority,
}: {
  img: ImgInterface;
  priority: boolean;
}) => {
  return (
    <div className="border overflow-hidden w-full h-full aspect-square">
      <figure className="h-full w-full">
        <Image
          src={getCldImageUrl({ src: img.img_id, format: "webp", quality: 50 })}
          alt={img.alt}
          className="w-full h-[500px] object-cover"
          // sizes="(min-width: 808px) 40vw, 70vw"
          fill
          priority={priority}
          loading={priority ? "eager" : "lazy"}
        />
        <figcaption className="caption">{img.alt}</figcaption>
      </figure>
    </div>
  );
};
const ThumbSlide = ({
  img,
  activeSlide,
  index,
}: {
  img: ImgInterface;
  activeSlide: number;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "border overflow-hidden md:min-h-[100px] mr-2 aspect-square",
        activeSlide === index ? "border-4 border-spacing-5 border-primary" : ""
      )}
    >
      <figure className="h-full w-full">
        <Image
          src={getCldImageUrl({ src: img.img_id, format: "webp", quality: 40 })}
          alt={img.alt}
          className="w-full h-full object-cover"
          sizes="(min-width: 808px) 40vw, 50vw"
          fill
        />
        <figcaption className="caption">{img.alt}</figcaption>
      </figure>
    </div>
  );
};

export default ProductImageSlider;
