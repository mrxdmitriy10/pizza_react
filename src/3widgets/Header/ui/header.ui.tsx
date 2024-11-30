import { useDispatch, useSelector } from "react-redux";


import CartSVG from './cart.svg'
import { countCartSelector } from "../../../5entities/Order";
import { toogleCartWidgetsVisibleAction } from "../../../4feature/Cart";

export const HeaderWidgets = () => {
  const dispatch = useDispatch();
  const countCart = useSelector(countCartSelector)
  return (
    <div className="flex justify-end">
      <button
        onClick={() => countCart>0&&dispatch(toogleCartWidgetsVisibleAction())}
        className="btn border-1 flex items-center justify-center gap-2 rounded-xl border-orange-400 border-opacity-10 p-3 text-2xl font-light text-orange-500"
      >
        <img width={30} src={CartSVG} alt="Корзина"></img> {countCart}
      </button>
    </div>
  );
};
