import AboutSection from "./_components/about-section";
import CategorySection from "./_components/category-section";
import HeroSection from "./_components/hero-section";
import ProductSlider from "./_components/product-slider-v2";
import capsuelProducts from "@/data/slim-products/capsule.json";

const Page = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CategorySection />
      <ProductSlider
        title="Capsule Filling Machinery"
        subtitle="Explore the wide range of Capsule Filling Machinery"
        products={capsuelProducts as any}
      />
    </>
  );
};

export default Page;
