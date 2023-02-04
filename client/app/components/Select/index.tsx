import { ISelectProps } from "./types";

const Select: React.FC<ISelectProps> = ({
  options,
  placeholder = "",
  ...props
}) => {
  return (
    <select
      {...props}
      className="bg-transparent border-b text-xl my-4 w-full border-white placeholder:text-white focus:placeholder:text-outline outline-none"
    >
      <option value="" disabled selected>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
