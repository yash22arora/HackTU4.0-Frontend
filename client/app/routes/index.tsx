import Button from "~/components/Button";
import Input from "~/components/Input";
import Navbar from "~/components/Navbar";
import Select from "~/components/Select";
import icecream from "../assets/pana.png";
import { COLLEGE_LIST } from "./config";

export default function Index() {
  return (
    <div className="flex flex-col w-screen h-full py-8 px-20 bg-background text-white">
      <Navbar />
      <div className="flex flex-row w-full justify-between items-center my-16 mb-8">
        <div className="w-1/2">
          <h1 className="text-5xl font-medium leading-tight">
            Set Up Your Campus Merchant Account
          </h1>
          <p className="text-outline text-xl my-2">
            Interact with students and avail special offers in your campus
          </p>
          <div className="rounded-xl py-8 px-16 w-full bg-foreground my-4">
            <Input placeholder="Business name" />
            <Input placeholder="Enter Email/Phone No." />
            <Select options={COLLEGE_LIST} placeholder="Select University" />
            <Button
              variant="primary"
              className="w-full mt-4 font-bold"
              onClick={() => {
                window.location.href = "/sign-up/step1";
              }}
            >
              Join the fam
            </Button>
            <div className="text-xs w-full text-center mt-4">
              <span>Already part of the Fam? </span>
              <span className="text-primary-text">Sign in here</span>
            </div>
          </div>
        </div>
        <div className="w-2/5">
          <img src={icecream} alt="Cart" className="" />
        </div>
      </div>
      <div className="rounded-xl py-12 px-16 w-full bg-foreground mb-4">
        <h1 className="text-4xl font-semibold">How FamPay Merchants works?</h1>
      </div>
    </div>
  );
}
