import Hero from "../../assets/Hero.jpg";
import Homepage from "../../components/Mobile/Homepage";

export default function Index() {
  return (
    <div className="flex w-screen h-screen items-center justify-center p-8 relative">
      <div className="relative max-w-[400px] w-full bg-background h-full text-white overflow-y-scroll">
        <img src={Hero} alt="Hero" className="fixed max-w-[400px] z-[0]" />
        <Homepage />
      </div>
    </div>
  );
}
