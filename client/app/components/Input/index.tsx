import { IInputProps } from "./types";

const Input: React.FC<IInputProps> = (props) => {
  return (
    <input
      {...props}
      className="bg-transparent border-b text-xl my-4 w-full border-white placeholder:text-white focus:placeholder:text-outline outline-none"
    />
  );
};

export default Input;
