import {
  BellIcon as SolidBellIcon,
  HomeIcon as SolidHomeIcon,
  UserIcon as SolidUserIcon,
} from "@heroicons/react/24/solid";
import { BellIcon, HomeIcon, UserIcon } from "@heroicons/react/24/outline";

export const FEED_TYPE_MENU = {
  All: '-1',
  TT: '1',
  Spark: '2',
  Compound: '3',
  Ape: '4',
  FileCoin: '5',
};

export const LEFT_SIDEBAR_MENU = [
  {
    name: "Home",
    icon: HomeIcon,
    solidIcon: SolidHomeIcon,
    path: "/",
  },
  {
    name: "Notifications",
    icon: BellIcon,
    solidIcon: SolidBellIcon,
    path: "/notifications",
  },
  {
    name: "Profile",
    icon: UserIcon,
    solidIcon: SolidUserIcon,
    path: "/profile",
  },
];
