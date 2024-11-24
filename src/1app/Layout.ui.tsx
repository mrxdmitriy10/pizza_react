
import { Outlet } from "react-router-dom";
import HeaderWidgets  from "../3widgets/Header";

export const LayoutUi = () => {
  return (
    <div className="flex justify-center p-0">
      <div className="flex w-full max-w-[900px] flex-col gap-4">
        <HeaderWidgets />
        <Outlet />
      </div>
    </div>
  );
};
