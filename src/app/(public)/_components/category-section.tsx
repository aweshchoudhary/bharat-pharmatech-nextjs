import Image from "next/image";

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
    image:
      "https://images.unsplash.com/photo-1704214584087-8eb7a4db12c2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Capsule filling machinery is a machine that is used to fill capsules with liquid or solid material.",
  },
  {
    id: 1,
    name: "Capsule Filling Machinery",
    href: "/c/capsule-filling-machinery",
    image:
      "https://images.unsplash.com/photo-1704214584087-8eb7a4db12c2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Capsule filling machinery is a machine that is used to fill capsules with liquid or solid material.",
  },
  {
    id: 1,
    name: "Capsule Filling Machinery",
    href: "/c/capsule-filling-machinery",
    image:
      "https://images.unsplash.com/photo-1704214584087-8eb7a4db12c2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Capsule filling machinery is a machine that is used to fill capsules with liquid or solid material.",
  },
  {
    id: 1,
    name: "Capsule Filling Machinery",
    href: "/c/capsule-filling-machinery",
    image:
      "https://images.unsplash.com/photo-1704214584087-8eb7a4db12c2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Capsule filling machinery is a machine that is used to fill capsules with liquid or solid material.",
  },
  {
    id: 1,
    name: "Capsule Filling Machinery",
    href: "/c/capsule-filling-machinery",
    image:
      "https://images.unsplash.com/photo-1704214584087-8eb7a4db12c2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Capsule filling machinery is a machine that is used to fill capsules with liquid or solid material.",
  },
  {
    id: 1,
    name: "Capsule Filling Machinery",
    href: "/c/capsule-filling-machinery",
    image:
      "https://images.unsplash.com/photo-1704214584087-8eb7a4db12c2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            <div>
              <Image
                width={500}
                height={500}
                src={category.image}
                alt={category.description}
                className="h-[300px] w-full object-cover"
              />
              <div className="bg-primary text-primary-foreground p-3 text-center truncate">
                <h3 className="font-semibold text-lg">{category.name}</h3>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CategorySection;
