import React, { useEffect, useState } from "react";
import { CardProps } from "@/interfaces/CardProps";
import { CirclePlayIcon, CirclePauseIcon, StarIcon } from "lucide-react";

const Card: React.FC<CardProps> = ({
  station,
  toggleFavorite,
  stationPlaying,
  setStationPlaying,
  favorites,
}) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    if (favorites?.some((favorite) => favorite.changeuuid === station.changeuuid)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favorites, station]);

  return (
    <div className="flex justify-between w-full text-amber-50 bg-neutral-600 min-h-12 pl-3 pr-1 rounded-md mb-4 items-center">
      <p className="font-semibold">{station.name}</p>
      <div className="flex gap-1.5">
        {stationPlaying?.changeuuid === station.changeuuid ? (
          <CirclePauseIcon
            cursor="pointer"
            onClick={() => setStationPlaying(null)}
          />
        ) : (
          <CirclePlayIcon
            color="black"
            cursor="pointer"
            onClick={() => setStationPlaying(station)}
          />
        )}
        <StarIcon
          color={isFavorite ? 'yellow' : 'white'}
          cursor="pointer"
          onClick={() => toggleFavorite(station)}
        />
      </div>
    </div>
  );
};

export default Card;
