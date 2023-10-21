import React from "react";
import { RadioGroup } from "@nextui-org/react";
import { BoostSelectItem } from "./BoostSelectItem";

interface IProps {
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
  protocols,
  selectedProtocol,
  setSelectedProtocol,
}: IProps) {
  return (
    <RadioGroup
      value={selectedProtocol}
      onValueChange={setSelectedProtocol}
      label="Choose a protocol to boost with:"
    >
      {/* <div className="w-full flex items-center justify-start space-x-3"> */}
      {protocols.map((protocol, index) => (
        <BoostSelectItem key={index} {...protocol}>
          <p>{protocol.name}</p>
        </BoostSelectItem>
      ))}
      {/* </div> */}
    </RadioGroup>
  );
}
