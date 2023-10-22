import React from "react";
import { RadioGroup } from "@nextui-org/react";
import { BoostSelectItem } from "./BoostSelectItem";

interface IProps {
  label: string;
  selectedProtocol: string;
  setSelectedProtocol: (value: string) => void;
  protocols: {
    name: string;
    value: string;
    balance: number;
    symbol: string;
  }[];
}

export default function BoostSelector({
  label,
  protocols,
  selectedProtocol,
  setSelectedProtocol,
}: IProps) {
  return (
    <RadioGroup
      value={selectedProtocol}
      onValueChange={setSelectedProtocol}
      label={label}
    >
      {protocols.map((protocol, index) => (
        <BoostSelectItem key={index} {...protocol}>
          <p>{protocol.name}</p>
        </BoostSelectItem>
      ))}
    </RadioGroup>
  );
}
