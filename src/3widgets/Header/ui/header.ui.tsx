import { useDispatch, useSelector } from "react-redux";

import { actions, selectors } from "..";
import CartSVG from './cart.svg'

export const HeaderWidgets = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectors.count)
  return (
    <div className="flex justify-end">
      <button
        onClick={() => dispatch(actions.toogleCartVisible())}
        className="btn border-1 flex items-center justify-center gap-2 rounded-xl border-orange-400 border-opacity-10 p-3 text-2xl font-light text-orange-500"
      >
        <img width={30} src={CartSVG} alt="Корзина"></img> {count}
      </button>
    </div>
  );
};
