import LoginNotice from "@/components/LoginNotice";
import NotificationItem from "@/components/NotificationItem";
import { useWalletStore } from "@/store/wallet/wallet.store";
import React from "react";

export default function Notifications() {
  const { ownerId } = useWalletStore();

  if (!ownerId)
    return (
      <div className="pt-3 px-4">
        <LoginNotice />
      </div>
    );

  return (
    <>
      <div className="p-3 border-b">
        <p className="text-xl font-semibold">Notifications</p>
      </div>
      <NotificationItem
        name="Spark Protocol"
        time="A moment ago"
        message="Someone has just boosted a post on spark protocol !"
      />
      <NotificationItem
        name="Filecoin Network"
        time="A moment ago"
        message="Someone has just boosted a post on filecoin network !"
      />
      <NotificationItem
        name="Spark Protocol"
        time="A moment ago"
        message="Someone has just boosted a post on spark protocol !"
      />
    </>
  );
}
