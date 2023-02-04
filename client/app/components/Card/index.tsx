import { ICardProps } from "./types";

const Card: React.FC<ICardProps> = (props) => {
  const { className, children } = props;
  return (
    <div
      className={
        "flex flex-col items-center justify-center p-4 rounded-xl " + className
      }
    >
      {children}
    </div>
  );
};

export default Card;
