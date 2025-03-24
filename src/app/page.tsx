"use client";

import { useEffect, useState } from "react";
import Card from "@/components/card";
import { Station } from "@/interfaces/Stations";
import {
  SearchIcon,
  PauseIcon,
  RefreshCwIcon,
} from "lucide-react";
import CardFavorite from "@/components/cardFavorite";
import { CircularProgress } from "@mui/material";

export default function Home() {
  const [stations, setStations] = useState<Station[]>([]);
  const [favorites, setFavorites] = useState<Station[]>([]);
  const [stationPlaying, setStationPlaying] = useState<Station | null>(null);
  const [filteredStations, setFilteredStations] = useState<Station[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://de1.api.radio-browser.info/json/stations/search?limit=10"
      );
      const data = await response.json();
      setStations(data);
      setFilteredStations(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Erro ao buscar estações:", error);
    }
  };

  useEffect(() => {
    fetchData();
    const storedFavorites = localStorage.getItem("favoriteStations");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const toggleFavorite = (station: Station) => {
    let updatedFavorites;

    if (favorites.some((fav) => fav.changeuuid === station.changeuuid)) {
      updatedFavorites = favorites.filter(
        (fav) => fav.changeuuid !== station.changeuuid
      );
    } else {
      updatedFavorites = [...favorites, station];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favoriteStations", JSON.stringify(updatedFavorites));
  };

  useEffect(() => {
    const filtered = stations.filter((station) =>
      `${station.name} ${station.country} ${station.language}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setFilteredStations(filtered);
  }, [searchTerm, stations]);

  return (
    <div className="w-screen h-screen flex flex-col sm:flex-row">
      <aside className="w-auto min-h-screen sm:h-screen p-3 bg-neutral-900 flex flex-col justify-center items-center pt-10">
        <div className="flex flex-col space-y-4 flex-1">
          <div className="flex justify-center mb-8">
            <div className="w-9/12">
              <input
                className="w-full text-amber-50 bg-gray-500 h-9 pl-2 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search here"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="p-2.5 overflow-y-auto flex-1">
          {loading ? (
            <CircularProgress />
          ) : filteredStations.length > 0 ? (
            filteredStations.map((station) => {
              return (
                <Card
                  key={station.changeuuid}
                  station={station}
                  toggleFavorite={toggleFavorite}
                  setStationPlaying={setStationPlaying}
                  stationPlaying={stationPlaying}
                  favorites={favorites}
                />
              );
            })
          ) : (
            <div className="flex flex-col items-center gap-3">
              <p className="text-gray-400 text-center">
                Nenhuma estação encontrada
              </p>
              <RefreshCwIcon
                cursor="pointer"
                color="#0080ff"
                onClick={() => fetchData()}
              />
            </div>
          )}
        </div>
      </aside>
      <main className="w-full h-screen p-10 bg-neutral-800 flex flex-col items-center flex-1">
        <h1 className="font-bold text-4xl mb-10">Radio Browser</h1>
        <div className="flex w-11/12 p-2.5 pr-5 pl-5 justify-between">
          <p>FAVORITE RADIOS</p>
          <div className="flex gap-2.5 items-center">
            <SearchIcon color="#0080ff" cursor="pointer" size={28} />
            <p>Search stations</p>
          </div>
        </div>
        <div className="flex flex-col w-11/12 bg-neutral-600 p-2.5 rounded-md">
          <div className="flex flex-col">
            <div className="flex gap-3 w-full text-amber-50 bg-neutral-800 min-h-14 pl-3 pr-1 rounded-md mb-4 items-center">
              {stationPlaying && (
                <>
                  <audio hidden autoPlay src={stationPlaying?.url_resolved} />
                  <PauseIcon
                    size={40}
                    cursor="pointer"
                    onClick={() => setStationPlaying(null)}
                  />
                  <p className="font-semibold text-2xl">
                    {stationPlaying?.name}
                  </p>
                </>
              )}
            </div>
            <div className="overflow-y-auto max-h-96 flex-1">
              {favorites.length > 0 ? (
                favorites.map((favoriteRadio) => (
                  <CardFavorite
                    key={favoriteRadio.changeuuid}
                    station={favoriteRadio}
                    setStationPlaying={setStationPlaying}
                    stationPlaying={stationPlaying}
                    toggleFavorite={toggleFavorite}
                  />
                ))
              ) : (
                <p className="text-gray-400 text-center">
                  Nenhuma estação favorita
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
