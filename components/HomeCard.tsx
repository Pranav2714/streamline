import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface HomeCardPorps {
  className: string;
  img: string;
  description: string;
  title: string;
  handleClick: () => void;
}

const HomeCard = ({
  className,
  img,
  title,
  description,
  handleClick,
}: HomeCardPorps) => {
  return (
    <div>
      <div
        className={cn(
          " flex  flex-col w-full rounded-[14px] justify-between  px-4 py-6 xl:max-w-[270px min-h-[270px] cursor-pointer ",
          className
        )}
        onClick={handleClick}
      >
        <div className="flex-center glassmorphism size-12 rounded-[10px]">
          <Image src={img} alt="Add meeting" width={27} height={27} />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold ">{title}</h1>
          <p className="text-lg font-normal">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
