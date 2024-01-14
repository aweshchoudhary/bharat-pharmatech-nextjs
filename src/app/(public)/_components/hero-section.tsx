"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative md:h-[600px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="background absolute -z-0 inset-0 h-full w-full"
      >
        <video
          src="https://stellaraesthetics.in/static/video-13.mp4"
          autoPlay
          muted
          loop
          className="h-full opacity-35 w-full object-cover"
        ></video>
      </motion.div>
      <div className="section flex items-center sticky inset-0 h-full w-full z-10">
        <div>
          <motion.h2
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:text-7xl md:text-5xl sm:text-3xl text-3xl leading-normal"
          >
            Your <b>Tablet</b> & <b>Capsule Filling</b>, <b>Packing</b> and
            <b> Pressing </b> Start Here
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:text-xl mt-5"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad porro,
            numquam vero sunt vitae aperiam libero odit ipsam blanditiis ipsa
            obcaecati atque totam in similique tempora, officia eos, eaque
            aliquam!
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex md:gap-3 gap-2"
          >
            <Button size={"lg"}>Learn More</Button>
            <Button size={"lg"} variant={"secondary"}>
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
