import { ButtonHTMLAttributes } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TButtonVariants;
}

export type TButtonVariants = "primary" | "secondary" | "tertiary";
