import { IButtonProps } from "./types";

const Button: React.FC<IButtonProps> = ({ variant = "primary", ...rest }) => {
  let buttonClass = "";
  switch (variant) {
    case "primary":
      buttonClass = "bg-primary-text text-background";
      break;
    case "secondary":
      buttonClass = "text-primary-text outline outline-primary-text";
      break;
  }

  return (
    <button
      {...rest}
      className={` px-4 py-2 rounded-full ${buttonClass} ${rest.className}`}
    >
      {rest.children}
    </button>
  );
};

export default Button;
