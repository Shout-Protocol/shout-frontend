import React from "react";
import { ChartBarIcon } from "@heroicons/react/24/solid";
import RankItem from "../RankItem";

const mockRankData = [
  {
    name: "@satosheep",
    address: "0x12fc5171bcb1acFF92D94f2a99bd394C613FAf58",
    value: 1900,
    symbol: "sDAI",
  },
  {
    name: "@sainytk",
    address: "0x12fc5171bcb1acFF92D94f2a99bd394C613FAf58",
    value: 1200,
    symbol: "sDAI",
  },
  {
    name: "@ribbinpo",
    address: "0x12fc5171bcb1acFF92D94f2a99bd394C613FAf58",
    value: 1000,
    symbol: "sDAI",
  },
];

export default function RightSidebar() {
  return (
    <div className="sticky top-5">
      <div className="flex items-center">
        <div className="bg-pink-100 p-1 rounded">
          <ChartBarIcon className="text-pink-400 w-5 h-5" />
        </div>
        <p className="font-semibold ml-1.5">Top Staking by Protocols</p>
      </div>
      <div className="mt-3 w-full px-3 space-y-2">
        {mockRankData.map((item, index) => (
          <RankItem key={index} rank={index + 1} {...item} />
        ))}
      </div>
    </div>
  );
}
