import Hero from "../../assets/Hero.jpg";

export default function Index() {
  return (
    <div className="flex w-screen h-screen items-center justify-center p-8">
      <div className="max-w-[400px] w-full bg-background h-full text-white overflow-y-scroll">
        <img src={Hero} alt="Hero" />
      </div>
    </div>
  );
}
