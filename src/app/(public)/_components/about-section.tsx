"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { motion } from "framer-motion";
import { getCldImageUrl } from "next-cloudinary";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="min-h-screen section flex md:flex-row flex-col-reverse gap-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1"
      >
        <h1 className="heading mb-5">Bharat Pharmatech</h1>
        <div className="space-y-5">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
            recusandae veniam voluptatum exercitationem doloremque minima, quod
            voluptas sint corrupti accusamus ad delectus atque esse? Fugiat cum
            cumque aspernatur, dolore corporis magni quas repellendus facilis
            animi assumenda impedit ullam sed blanditiis accusantium nihil
            similique nobis quae dignissimos sint illum itaque repudiandae?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsam
            modi perferendis soluta nesciunt voluptatibus sunt similique
            expedita ipsum dolores! Alias magnam vitae quod magni adipisci!
            Maiores provident suscipit repellendus.
          </p>
          <br />
          <h3 className="md:text-2xl text-xl font-semibold">
            Our Features List
          </h3>
          <ul className="list-disc space-y-2 ">
            <li className="flex gap-3">
              <Icon className="text-2xl shrink-0" icon="bi:arrow-right" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              sit, mollitia.
            </li>
            <li className="flex gap-3">
              <Icon className="text-2xl shrink-0" icon="bi:arrow-right" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              sit, mollitia. Lorem ipsum dolor sit amet.
            </li>
            <li className="flex gap-3">
              <Icon className="text-2xl shrink-0" icon="bi:arrow-right" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              sit, mollitia. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Dolore, soluta?
            </li>
            <li className="flex gap-3">
              <Icon className="text-2xl shrink-0" icon="bi:arrow-right" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              sit, mollitia. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quod laborum maiores minima sapiente consectetur vitae, ut
              excepturi totam in eius. Ea natus ullam tempora atque voluptate
              delectus commodi possimus id.
            </li>
          </ul>
          <div className="flex gap-3 pt-5">
            <Link
              href="/about"
              className={buttonVariants({ variant: "default" })}
              aria-label="learn more about us"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className={buttonVariants({ variant: "secondary" })}
              aria-label="contact us for more information"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="md:basis-1/2 h-full relative inset-0"
      >
        <figure className="h-full w-full sticky inset-0">
          <Image
            src={getCldImageUrl({
              src: "Backgrounds/difference-between-tablets-and-capsules_yqvtos",
              width: 800,
              height: 800,
            })}
            alt="bharat pharmatech"
            width={500}
            height={500}
            className="bg-gray-500 h-[600px] md:rounded-2xl rounded w-full object-cover"
          />
          <figcaption className="opacity-0">bharat pharmatech</figcaption>
        </figure>
      </motion.div>
    </section>
  );
};

export default AboutSection;
