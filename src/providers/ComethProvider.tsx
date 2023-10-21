import {
  ComethProvider as Provider,
  ComethWallet,
  ConnectAdaptor,
  SupportedNetworks,
} from "@cometh/connect-sdk";
import { useEffect, useState } from "react";

import { ComethContext } from "@/contexts/cometh.context";

const API_KEY = process.env.NEXT_PUBLIC_COMETH_API_KEY || "";

export default function ComethProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [instance, setInstance] = useState<ComethWallet>();
  const [instanceProvider, setInstanceProvider] = useState<Provider>();
  useEffect(() => {
    const walletAdaptor = new ConnectAdaptor({
      chainId: SupportedNetworks.MUMBAI,
      apiKey: API_KEY,
    });

    const instance = new ComethWallet({
      authAdapter: walletAdaptor,
      apiKey: API_KEY,
    });

    const instanceProvider = new Provider(instance);
    setInstance(instance);
    setInstanceProvider(instanceProvider);
    console.log("connect cometh instance");
  }, []);
  return (
    <ComethContext.Provider
      value={{
        instance: instance,
        instanceProvider: instanceProvider,
        setInstanceProvider,
        setInstance,
      }}
    >
      {children}
    </ComethContext.Provider>
  );
}
