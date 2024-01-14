import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="min-h-screen section flex md:flex-row flex-col-reverse gap-10">
      <div className="flex-1">
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
          <h3 className="md:text-2xl text-xl font-semibold">
            Our Features List
          </h3>
          <ul className="list-disc space-y-2 ml-10">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              sit, mollitia.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              sit, mollitia.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              sit, mollitia.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              sit, mollitia.
            </li>
          </ul>
        </div>
      </div>
      <div className="md:basis-1/2">
        <figure>
          <Image
            src="/logo.svg"
            alt="bharat pharmatech"
            width={500}
            height={500}
            className="bg-gray-500"
          />
          <figcaption className="opacity-0">bharat pharmatech</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default AboutSection;
