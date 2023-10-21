import React from "react";
import { ChartBarIcon } from "@heroicons/react/24/solid";
import RankItem from "../RankItem";

const mockRankData = [
  {
    rank: 1,
    name: "Spark Protocol",
    address: "0x12fc5171bcb1acFF92D94f2a99bd394C613FAf58",
    value: 1900,
  },
  {
    rank: 2,
    name: "Ape Coin",
    address: "0x12fc5171bcb1acFF92D94f2a99bd394C613FAf58",
    value: 1200,
  },
  {
    rank: 3,
    name: "Filecoin Network",
    address: "0x12fc5171bcb1acFF92D94f2a99bd394C613FAf58",
    value: 1000,
  },
];

export default function RightSidebar() {
  return (
    <>
      <div className="flex items-center">
        <div className="bg-pink-100 p-1 rounded">
          <ChartBarIcon className="text-pink-400 w-5 h-5" />
        </div>
        <p className="font-semibold ml-1.5">Top Staking by Protocol</p>
      </div>
      <div className="mt-3 w-full px-3 space-y-2">
        {mockRankData.map((item, index) => (
          <RankItem key={index} {...item} />
        ))}
      </div>
    </>
  );
}
