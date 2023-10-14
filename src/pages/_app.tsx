import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import MainLayout from "@/components/MainLayout";
import WagmiRainbowProvider from "@/providers/WagmiRainbowProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <WagmiRainbowProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </WagmiRainbowProvider>
    </NextUIProvider>
  );
}
