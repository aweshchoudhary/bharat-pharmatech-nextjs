"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { getCldImageUrl } from "next-cloudinary";

interface CategoryType {
  id: number;
  name: string;
  href: string;
  image: string;
  description: string;
}

const categories: CategoryType[] = [
  {
    id: 1,
    name: "Capsule Filling Machinery",
    href: "/c/capsule-filling-machinery",
    image: "",
    description:
      "Capsule filling machinery is a machine that is used to fill capsules with liquid or solid material.",
  },
  {
    id: 1,
    name: "Capsule Filling Machinery",
    href: "/c/capsule-filling-machinery",
    image: "",
    description:
      "Capsule filling machinery is a machine that is used to fill capsules with liquid or solid material.",
  },
  {
    id: 1,
    name: "Capsule Filling Machinery",
    href: "/c/capsule-filling-machinery",
    image: "",
    description:
      "Capsule filling machinery is a machine that is used to fill capsules with liquid or solid material.",
  },
  {
    id: 1,
    name: "Capsule Filling Machinery",
    href: "/c/capsule-filling-machinery",
    image: "",
    description:
      "Capsule filling machinery is a machine that is used to fill capsules with liquid or solid material.",
  },
  {
    id: 1,
    name: "Capsule Filling Machinery",
    href: "/c/capsule-filling-machinery",
    image: "",
    description:
      "Capsule filling machinery is a machine that is used to fill capsules with liquid or solid material.",
  },
  {
    id: 1,
    name: "Capsule Filling Machinery",
    href: "/c/capsule-filling-machinery",
    image: "",
    description:
      "Capsule filling machinery is a machine that is used to fill capsules with liquid or solid material.",
  },
];

const CategorySection = () => {
  return (
    <section className="section">
      <h2 className="heading mb-5">Our Categories</h2>
      <ul className="flex flex-wrap">
        {categories.map((category: CategoryType, i: number) => (
          <li key={i} className="lg:basis-1/3 basis-1/2 p-2">
            <CategoryCard category={category} delay={0.2 + i / 6} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const CategoryCard = ({
  category,
  delay = 0,
}: {
  category: CategoryType;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, type: "spring", damping: 20 }}
      className="md:rounded-md hover:shadow-xl rounded overflow-hidden cursor-pointer"
    >
      <Image
        width={500}
        height={500}
        src={getCldImageUrl({
          src: "Backgrounds/difference-between-tablets-and-capsules_yqvtos",
        })}
        alt={category.description}
        className="h-[300px] w-full bg-accent object-cover"
      />
      <div className="bg-primary text-primary-foreground p-3 text-center truncate">
        <h3 className="font-semibold text-lg">{category.name}</h3>
      </div>
    </motion.div>
  );
};

export default CategorySection;
