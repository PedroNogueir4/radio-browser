import { Station } from "./Stations";

export interface CardProps {
    station:Station
    toggleFavorite: (station: Station) => void;
    stationPlaying: Station | null;
    setStationPlaying: React.Dispatch<React.SetStateAction<Station | null>>;
  }