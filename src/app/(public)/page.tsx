import AboutSection from "./_components/about-section";
import CapsuleProductSlider from "./_components/product-slider";
import CategorySection from "./_components/category-section";
import HeroSection from "./_components/hero-section";

const Page = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CategorySection />
      <CapsuleProductSlider />
      <CapsuleProductSlider />
      <CapsuleProductSlider />
    </>
  );
};

export default Page;
