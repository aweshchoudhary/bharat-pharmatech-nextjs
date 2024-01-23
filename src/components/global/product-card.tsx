import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="min-h-[580px]">
      <figure className="aspect-square relative overflow-hidden w-full bg-accent object-cover">
        <Image
          src={getCldImageUrl({
            src: "Backgrounds/difference-between-tablets-and-capsules_yqvtos",
          })}
          height={500}
          width={500}
          alt="product title goes here"
          className="h-full w-full object-cover"
        />
        <figcaption className="absolute top-full left-full opacity-0">
          Product Title Goes here
        </figcaption>
      </figure>
      <div className="mt-3">
        <p>Capsule Filling Machienry</p>
        <h3 className="md:text-xl font-semibold">
          PVC Alu Single Track Blister Packing machine
        </h3>
      </div>
    </div>
  );
};

export default ProductCard;
