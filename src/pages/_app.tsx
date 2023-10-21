import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import MainLayout from "@/components/Layout/MainLayout";
import ComethProvider from "@/providers/ComethProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <ComethProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ComethProvider>
    </NextUIProvider>
  );
}
