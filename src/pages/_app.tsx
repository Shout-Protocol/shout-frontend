import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import MainLayout from "@/components/Layout/MainLayout";
import ComethProvider from "@/providers/ComethProvider";
import MetaMaskProvider from "@/providers/MetaMaskProvider";
import ApolloClientProvider from "@/providers/ApolloClientProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloClientProvider>
      <NextUIProvider>
        <MetaMaskProvider>
          <ComethProvider>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </ComethProvider>
        </MetaMaskProvider>
      </NextUIProvider>
    </ApolloClientProvider>
  );
}
