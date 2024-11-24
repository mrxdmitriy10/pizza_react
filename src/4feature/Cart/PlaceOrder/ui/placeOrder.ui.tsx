import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "..";

export const PlaceOrderFeature = () => {
    const dispatch = useDispatch()
    const countOrder = useSelector(selectors.count)
    
  return (
    <button
      onClick={() =>
        countOrder!=0
          ? dispatch(actions.toogleCartWidgetsVisible())
          : dispatch(actions.toogleCartWidgetsVisible())
      }
      className="group m-auto flex w-full flex-col items-center rounded-3xl border-2 border-red-400 py-3 text-3xl font-light text-red-400 transition-all duration-500 hover:bg-red-500 hover:text-white sm:w-[500px]"
    >
      <div>{countOrder}</div>
      <div className="text-red text-sm group-hover:text-white">
        Оформить заказ
      </div>
    </button>
  );
};
