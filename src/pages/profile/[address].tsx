import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();
  const walletAddr = router.query.address;
  return <div></div>;
}
