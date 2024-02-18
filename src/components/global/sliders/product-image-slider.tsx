"use client";
import Slider from "react-slick";

function ProductImageSlider() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="h-[300px] w-full bg-accent flex items-center justify-center text-5xl text-accent-foreground">
          <h3>1</h3>
        </div>
        <div className="h-[300px] w-full bg-accent flex items-center justify-center text-5xl text-accent-foreground">
          <h3>2</h3>
        </div>
        <div className="h-[300px] w-full bg-accent flex items-center justify-center text-5xl text-accent-foreground">
          <h3>3</h3>
        </div>
        <div className="h-[300px] w-full bg-accent flex items-center justify-center text-5xl text-accent-foreground">
          <h3>4</h3>
        </div>
        <div className="h-[300px] w-full bg-accent flex items-center justify-center text-5xl text-accent-foreground">
          <h3>5</h3>
        </div>
        <div className="h-[300px] w-full bg-accent flex items-center justify-center text-5xl text-accent-foreground">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default ProductImageSlider;
