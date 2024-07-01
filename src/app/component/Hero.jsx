import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="relative h-[500px] w-full">
      <div className="relative w-full h-[350px] lg:h-[500px]">
        <Image
          src={"/girl.jpeg"}
          fill
          alt="girl wearing glasses"
          className="object-cover"
        />
      </div>
      <div className="p-4 bg-white rounded-md w-[80%] z-10 absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 lg:w-[40%] lg:left-[400px] lg:-translate-x-1/2 lg:-translate-y-[40%] lg:py-8">
        <h1 className="font-bold text-3xl lg:text-4xl lg:leading-[3rem]">
          {`Journée des maladies rares 2024 : L'équité en action`}
        </h1>
        <p className="my-3 text-sm lg:text-base text-gray-600 lg:my-4 ">
          {`À l'occasion de la Journée des maladies rares, il est plus important
          que jamais de continuer à rechercher un diagnostic, une innovation, un
          soutien et un accès équitables pour les personnes atteintes de
          maladies rares.`}
        </p>
        <Link
          href="#"
          className="bg-[#7A00E6] text-white px-4 py-3 rounded-lg text-xs">
          En savoir plus
        </Link>
      </div>
    </div>
  );
};
