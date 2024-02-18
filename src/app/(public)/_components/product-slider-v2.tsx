"use client";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "@/components/global/product-card";
import { Button } from "@/components/ui/button";
import { OcticonArrowRight16 } from "@/assets/icons";
import { ProductInterface } from "@/interfaces/types";

const ProductSlider = ({
  products,
  title,
  subtitle,
}: {
  products: ProductInterface[];
  title: string;
  subtitle: string;
}) => {
  let sliderRef = useRef<any | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="lg:py-20 py-10">
      <div className="mb-10 lg:px-20  md:px-10 px-5 flex items-center justify-between">
        <div>
          <h2 className="heading mb-2">{title}</h2>
          <p className="sub-heading text-muted-foreground">{subtitle}</p>
        </div>
        <div className="flex gap-2">
          <Button size="icon" onClick={() => sliderRef?.current?.slickPrev()}>
            <OcticonArrowRight16 className="rotate-180 text-xl" />
          </Button>
          <Button size="icon" onClick={() => sliderRef?.current?.slickNext()}>
            <OcticonArrowRight16 className="text-xl" />
          </Button>
        </div>
      </div>
      <Slider {...settings} ref={(slider: any) => (sliderRef.current = slider)}>
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </Slider>
    </section>
  );
};

export default ProductSlider;
