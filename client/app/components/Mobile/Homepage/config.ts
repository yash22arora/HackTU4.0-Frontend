import { IconType } from "react-icons";
import { AiFillFire } from "react-icons/ai";
import { IoIosWallet } from "react-icons/io";
import { RiVipDiamondFill } from "react-icons/ri";

// make array of objects with icon and text
export const PRIMARY_CARDS: {
  icon: JSX.Element | IconType;
  title: string;
}[] = [
  {
    icon: AiFillFire,
    title: "New",
  },
  {
    icon: IoIosWallet,
    title: "Money",
  },
  {
    icon: RiVipDiamondFill,
    title: "Rewards",
  },
];
