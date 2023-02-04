import Card from "../Card";
import { IIconCardProps } from "./config";

const IconCard: React.FC<IIconCardProps> = ({ icon, title }) => {
  return (
    <Card>
      <div className="flex flex-col p-2 rounded-md items-center justify-center w-full bg-primary-card border border-outline h-min">
        {icon}
        <h1 className="text-sm mt-1">{title}</h1>
      </div>
    </Card>
  );
};
export default IconCard;
