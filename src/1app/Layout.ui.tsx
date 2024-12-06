
import { Outlet } from "react-router-dom";


export const LayoutUi = () => {
  return (
    <div className="flex justify-center p-0">
      <div className="flex w-full max-w-[900px] flex-col">
        {/* <HeaderWidgets /> */}
        <Outlet />
      </div>
    </div>
  );
};
