import Button from "~/components/Button";
import WhiteLogo from "../../assets/WhiteLogo.png";
import QR from "../../assets/QR.png";

const Signup2: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center h-full overflow-y-hidden py-16 pb-40 w-full p-4 text-white">
      <div className="flex flex-row items-end justify-center mb-8">
        <img src={WhiteLogo} alt="FamPay" className="w-48" />
        <span className="text-4xl">Campus Merchant</span>
      </div>
      <div className="rounded-xl py-8 px-16 w-full max-w-[600px] bg-foreground my-4">
        <p className="text-3xl text-center w-full">Set Up Profile</p>
        <p className="text-md text-outline font-thin text-center w-full mb-5">
          Select your UPI ID and personalise your QR for a more fun experience.
        </p>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">Edit you UPI ID</span>
          <div className="flex flex-row my-2">
            <input className="border-b-2 border-primary-text bg-transparent w-1/2 inline outline-none text-white text-lg" />
            <span className="text-lg text-outline">@famMerchant</span>
          </div>
        </div>
        <p className="text-lg font-semibold mt-4">Personalise your UPI QR</p>
        <img src={QR} alt="QR" className="w-full mt-4" />
        <Button
          variant="primary"
          className="w-full mt-8 font-semibold"
          onClick={() => {
            window.location.href = "/sign-up/step3";
          }}
        >
          Setup Account
        </Button>
      </div>
      <img
        src={WhiteLogo}
        alt="FamPay"
        className="w-5/6 absolute bottom-0 translate-y-1/3 opacity-10 pt-16"
      />
    </div>
  );
};

export default Signup2;
