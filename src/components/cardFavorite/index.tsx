import React from "react";
import { CirclePlayIcon, PencilIcon, TrashIcon } from "lucide-react";
import { CardFavoriteProps } from "@/interfaces/CardFavoriteProps";

const CardFavorite: React.FC<CardFavoriteProps> = ({ text,tags,country }) => {
  return (
    <>
      <div className="flex justify-between w-full text-gray-900 bg-neutral-500 min-h-15 pl-3 pr-3 rounded-md mb-4 items-center">
        <div className="flex gap-3">
          <CirclePlayIcon size={40} cursor='pointer' />
          <div className="flex flex-col">
          <p className="font-semibold text-2xl">{text}</p>
          <p>{country},{tags}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <PencilIcon cursor='pointer' />
          <TrashIcon cursor='pointer'/>
        </div>
      </div>
    </>
  );
};

export default CardFavorite;
