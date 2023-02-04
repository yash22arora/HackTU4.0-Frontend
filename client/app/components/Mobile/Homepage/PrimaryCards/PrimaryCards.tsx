import { AiFillFire } from "react-icons/ai";
import { IoIosWallet } from "react-icons/io";
import { RiVipDiamondFill } from "react-icons/ri";
import IconCard from "~/components/IconCard";

const PrimaryCards: React.FC = () => {
  return (
    <div className=" grid grid-cols-3 w-full overflow-x-scroll my-4 h-min">
      <IconCard
        icon={<AiFillFire className="text-primary-text" />}
        title={"New"}
      />
      <IconCard
        icon={<IoIosWallet className="text-primary-text" />}
        title={"Money"}
      />
      <IconCard
        icon={<RiVipDiamondFill className="text-primary-text" />}
        title={"Rewards"}
      />
    </div>
  );
};

export default PrimaryCards;
