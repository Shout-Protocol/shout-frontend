import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import MainLayout from "@/components/Layout/MainLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </NextUIProvider>
  );
}
