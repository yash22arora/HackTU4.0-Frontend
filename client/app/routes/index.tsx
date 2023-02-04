import Navbar from "~/components/Navbar";
import icecream from "../assets/pana.png";

export default function Index() {
  return (
    <div className="flex flex-col w-screen h-screen py-8 px-16 bg-background text-white">
      <Navbar />
      <div className="flex flex-row w-full justify-between items-center my-16">
        <div className="w-2/5">
          <h1 className="text-5xl font-medium leading-tight">
            Set Up Your Campus Merchant Account
          </h1>
          <p className="text-outline text-xl my-2">
            Interact with students and avail special offers in your campus
          </p>
          <div className="rounded-xl py-8 px-16 w-full bg-foreground my-4"></div>
        </div>
        <div className="w-2/5">
          <img src={icecream} alt="Cart" className="" />
        </div>
      </div>
    </div>
  );
}
