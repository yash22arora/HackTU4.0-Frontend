import { ReactNode } from "react";
import { ICardProps } from "../Card/types";

export interface IIconCardProps extends ICardProps {
  icon: JSX.Element;
  title: string;
}
