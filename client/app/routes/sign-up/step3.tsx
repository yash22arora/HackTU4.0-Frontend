import Button from "~/components/Button";
import Input from "~/components/Input";
import Select from "~/components/Select";
import WhiteLogo from "../../assets/WhiteLogo.png";
import Burger from "../../assets/Burger.png";

const Signup1: React.FC = () => {
  return (
    <div className="flex flex-col items-center h-full py-16 w-full overflow-y-hidden p-4 text-white relative">
      <div className="flex flex-row items-end justify-center mb-8">
        <img src={WhiteLogo} alt="FamPay" className="w-48" />
        <span className="text-4xl">Campus Merchant</span>
      </div>
      <img src={Burger} alt="FamPay" className="w-full max-w-[600px]" />
      <div className="-top-24 rounded-b-xl py-8 px-16 w-full max-w-[600px] bg-foreground mb-4 relative z-10">
        <p className="text-3xl text-center w-full">Who are you?</p>
        <p className="text-md text-outline font-thin text-center w-full mb-5">
          Let your customers know who you are and make a personal connect with
          them.
        </p>

        <Input placeholder="Enter Username" />
        <Input placeholder="Bio" />
        <Button
          variant="primary"
          className="w-full mt-4 font-semibold z-10"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Join the Fam
        </Button>
      </div>
      <img
        src={WhiteLogo}
        alt="FamPay"
        className="w-5/6 absolute bottom-0 translate-y-1/3 opacity-10 z-[-1]"
      />
    </div>
  );
};

export default Signup1;
