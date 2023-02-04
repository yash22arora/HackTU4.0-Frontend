import Button from "~/components/Button";
import Input from "~/components/Input";
import Select from "~/components/Select";
import WhiteLogo from "../../assets/WhiteLogo.png";

const Signup1: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center h-screen overflow-y-hidden py-16 w-full p-4 text-white">
      <div className="flex flex-row items-end justify-center mb-8">
        <img src={WhiteLogo} alt="FamPay" className="w-48" />
        <span className="text-4xl">Campus Merchant</span>
      </div>
      <div className="rounded-xl py-8 px-16 w-full max-w-[600px] bg-foreground my-4">
        <p className="text-3xl text-center w-full">Merchant KYC</p>
        <p className="text-md text-outline font-thin text-center w-full mb-5">
          Enable Transactions with a verified account
        </p>

        <Input placeholder="Enter Phone No. linked with bank account" />
        <Select
          options={[]}
          placeholder="What kind of service do you provide?"
        />
        <Input placeholder="PAN ID" />
        <Input placeholder="GST No." />
        <Button
          variant="primary"
          className="w-full mt-4 font-semibold"
          onClick={() => {
            window.location.href = "/sign-up/step2";
          }}
        >
          Setup Account
        </Button>
      </div>
      <img
        src={WhiteLogo}
        alt="FamPay"
        className="w-5/6 absolute bottom-0 translate-y-1/3 opacity-10"
      />
    </div>
  );
};

export default Signup1;
