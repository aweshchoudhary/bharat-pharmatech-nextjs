"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import ProductCard from "@/components/global/product-card";

const CapsuleProductSlider = () => {
  return (
    <section className="lg:py-20 py-10">
      <div className="mb-10 lg:px-20  md:px-10 px-5">
        <h2 className="heading">Capsule Filling Machinery</h2>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        navigation
        loop
        className="mx-10"
        autoHeight
      >
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CapsuleProductSlider;
