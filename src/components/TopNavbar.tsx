import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";

export default function TopNavbar() {
  const router = useRouter();

  return (
    <Navbar maxWidth="full" className="px-0 lg:px-20 border-b py-1.5">
      <NavbarBrand>
        <div
          onClick={() => router.push("/")}
          className="select-none cursor-pointer flex items-center"
        >
          <Image src="/shout.svg" alt="Shout Logo" width="30" height="30" />
          <p className="text-gray-800 font-bold text-2xl ml-3">
            shout protocol
          </p>
        </div>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <ConnectButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
