import React from "react";
import {
  CirclePauseIcon,
  CirclePlayIcon,
  PencilIcon,
  TrashIcon,
} from "lucide-react";
import { CardProps } from "@/interfaces/CardProps";

const CardFavorite: React.FC<CardProps> = ({
  station,
  setStationPlaying,
  stationPlaying,
  toggleFavorite
}) => {
  return (
    <>
      <div className="flex justify-between w-full text-gray-900 bg-neutral-500 min-h-15 pl-3 pr-3 rounded-md mb-4 items-center">
        <div className="flex gap-3 items-center">
          {stationPlaying?.changeuuid === station.changeuuid ? (
            <>
              <CirclePauseIcon
                size={40}
                cursor="pointer"
                onClick={() => setStationPlaying(null)}
              />
            </>
          ) : (
            <>
              <CirclePlayIcon
                size={40}
                cursor="pointer"
                onClick={() => setStationPlaying(station)}
              />
            </>
          )}

          <div className="flex flex-col">
            <p className="font-semibold text-2xl">{station.name}</p>
            <p>
              {station.country},{station.tags}
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <PencilIcon cursor="pointer" />
          <TrashIcon cursor="pointer" onClick={()=> toggleFavorite(station)} color="red" />
        </div>
      </div>
    </>
  );
};

export default CardFavorite;
