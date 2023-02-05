import { Outlet } from "react-router-dom";

export default function Index() {
  return (
    <div className="flex w-screen h-screen items-center justify-center p-8 relative bg-[#181818]">
      <div className="relative max-w-[400px] w-full bg-background h-full text-white overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
}
