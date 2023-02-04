import { SelectHTMLAttributes } from "react";

export interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: {
    label: string;
    value: string;
  }[];
  placeholder?: string;
}
