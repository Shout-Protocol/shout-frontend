import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import MainLayout from "@/components/Layout/MainLayout";
import ApolloClientProvider from "@/providers/ApolloClientProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloClientProvider>
      <NextUIProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </NextUIProvider>
    </ApolloClientProvider>
  );
}
