"use client";

import { useEffect, useState } from "react";
import Card from "@/components/card";
import { Station } from "@/interfaces/Stations";
import { AlignJustifyIcon, PlayIcon, SearchIcon, PauseIcon } from "lucide-react";
import CardFavorite from "@/components/cardFavorite";

export default function Home() {
  const [stations, setStations] = useState<Station[]>([]);

  const fetchData = async () => {
    await fetch(
      "https://de1.api.radio-browser.info/json/stations/search?limit=10",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => setStations(data))
      .catch((error) => {
        console.error("Erro ao buscar estações:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-screen h-screen flex">
      <aside className="w-fit h-screen p-3 bg-neutral-900 flex flex-col">
        <div className="flex flex-col space-y-4">
          <div className="flex justify-end">
            <AlignJustifyIcon
              className="block sm:hidden"
              size={30}
              color="#0080ff"
            />
          </div>
          <div className="flex justify-center mb-8">
            <div className="w-9/12">
              <input
                className="w-full text-amber-50 bg-gray-500 h-9 pl-2 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.5)" }}
                placeholder="Search here"
              />
            </div>
          </div>
        </div>
        <div className="p-2.5 overflow-y-auto flex-1">
          {stations.map((station) => {
            return <Card key={station.changeuuid} text={station.name} />;
          })}
        </div>
      </aside>
      <main className="w-full p-10 pl-15 bg-neutral-800 flex flex-col items-center">
        <h1 className="font-bold text-4xl mb-10">Radio Browser</h1>
        <div className="flex w-11/12 p-2.5 pr-5 pl-5 justify-between">
          <div>
            <p>FAVORITE RADIOS</p>
          </div>
          <div className="flex gap-2.5 items-center">
            <SearchIcon color="#0080ff" cursor="pointer" size={28} />
            <p>Search stations</p>
          </div>
        </div>
        <div className="flex flex-col w-11/12 bg-neutral-600 p-2.5 rounded-md">
          <div className="flex flex-col">
            <div className="flex gap-3 w-full text-amber-50 bg-neutral-800 min-h-14 pl-3 pr-1 rounded-md mb-4 items-center">
              <PauseIcon size={40} cursor='pointer' />
              <p className="font-semibold text-2xl">Teste Radio</p>
            </div>
            <div className="overflow-y-auto max-h-96">
              {stations.map((favoriteRadio) => {
                return <CardFavorite key={favoriteRadio.changeuuid} text={favoriteRadio.name} country={favoriteRadio.country} tags={favoriteRadio.tags} />;
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
