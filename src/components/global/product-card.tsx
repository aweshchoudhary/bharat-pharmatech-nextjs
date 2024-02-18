import { ProductInterface } from "@/interfaces/types";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";

const ProductCard = ({ product }: { product: ProductInterface }) => {
  return (
    <div className="min-h-[480px] mx-2">
      <figure className="aspect-square overflow-hidden rounded-lg relative w-full bg-accent object-cover">
        <Image
          src={getCldImageUrl({
            src: product.imgs[0].img_id,
          })}
          height={500}
          width={500}
          alt={product.imgs[0].alt}
          className="h-full w-full object-cover"
        />
        <figcaption className="absolute top-full left-full opacity-0">
          {product.imgs[0].alt}
        </figcaption>
      </figure>
      <div className="mt-3">
        <p className="uppercase text-muted-foreground">{product.category}</p>
        <h3 className="md:text-xl font-semibold">{product.title}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
