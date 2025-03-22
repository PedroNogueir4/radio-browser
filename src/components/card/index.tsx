import React from "react";
import { CardProps } from "@/interfaces/CardProps";
import { CirclePlayIcon, CirclePauseIcon, StarIcon } from "lucide-react";

const Card: React.FC<CardProps> = ({ text }) => {
  return (
    <>
      <div className="flex justify-between w-full text-amber-50 bg-neutral-600 min-h-12 pl-3 pr-1 rounded-md mb-4 items-center">
        <p className="font-semibold">{text}</p>
        <div className="flex gap-1.5">
          <CirclePlayIcon color="green" cursor={"pointer"} data-tip="Play" />
          <CirclePauseIcon cursor={"pointer"} data-tip="Pause" />
          <StarIcon color="yellow" cursor={"pointer"} data-tip="Favorite" />
        </div>
      </div>
    </>
  );
};

export default Card;
