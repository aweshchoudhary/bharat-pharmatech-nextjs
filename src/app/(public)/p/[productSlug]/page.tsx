// import { getCldImageUrl } from "next-cloudinary";
// import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ProductInterface } from "@/interfaces/types";
import Link from "next/link";
import { PajamasArrowRight } from "@/assets/icons";

async function getProduct(slug: string): Promise<{
  product?: ProductInterface;
  error: boolean;
}> {
  try {
    let product: any = (await import(`@/data/products/${slug}.json`))?.default;
    return {
      error: false,
      product,
    };
  } catch (err) {
    console.log(err);
    return {
      error: true,
    };
  }
}

type Props = {
  params: { productSlug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Page({ params }: Props) {
  const { product, error } = await getProduct(params.productSlug);

  if (error || !product) {
    return (
      <section className="h-[300px] flex items-center justify-center">
        <div className="text-center">
          <h1 className="lg:text-4xl text-3xl font-bold">Product Not Found!</h1>
          <p>the product you were looking for is not exists</p>
          <p>
            back{" "}
            <Link href="/" className="font-medium underline">
              Home
            </Link>
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="md:p-10 p-5">
        <div className="mb-5">
          <p>Home / Products / Manual Capsule Filling</p>
        </div>
        <div className="mb-5">
          <h1 className="heading">{product.title}</h1>
        </div>
        <div className="flex gap-10 items-start">
          <div className="flex-1 h-[400px]">
            <div className="p-10 border h-full">
              {/* <ProductImageSlider imgs={product.imgs} /> */}
            </div>
          </div>
          <div className="flex-1">
            <iframe
              src="https://www.youtube.com/embed/40es9zw0570?si=9ekE_lt1_oDvnxfF"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="border-4 border-primary aspect-video w-full h-full overflow-hidden"
            ></iframe>
            <div className="mt-5 flex gap-2">
              <Button>Enquiry Call</Button>
              <Button variant="secondary">Whatsapp Us</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="section-x py-5" id="description">
        <h2 className="mb-5 small-heading">Description</h2>
        {product.descriptions.map((desc, i) => (
          <p key={i}>{desc}</p>
        ))}
      </section>
      <section className="section-x py-5 space-y-10">
        {product.features_lists.map((list, i) => (
          <div key={i} id={list.name}>
            <h2 className="mb-5 small-heading capitalize">{list.name}</h2>
            <ul className="list-inside space-y-2 ml-5">
              {list.list.map((item, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <PajamasArrowRight className="text-xl shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section className="section-x py-5">
        {product.tables.map((table, i) => (
          <div key={i}>
            <h2 className="small-heading mb-5 capitalize">{table.name}</h2>
            <Table className="border">
              <TableCaption>{table.name}</TableCaption>
              <TableHeader>
                <TableRow>
                  {table.headers.map((head, i) => (
                    <TableHead
                      key={i}
                      className={i === 0 ? "md:w-[250px]" : ""}
                    >
                      {head}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {table.rows.map((row, i) => (
                  <TableRow key={i}>
                    {row.map((cell, i) => (
                      <TableCell key={i}>{cell}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ))}
      </section>
    </>
  );
}
