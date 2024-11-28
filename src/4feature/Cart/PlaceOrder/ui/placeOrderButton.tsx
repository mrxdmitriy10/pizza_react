import { useDispatch, useSelector } from "react-redux";
import { countCartSelector } from "../../../../5entities/Cart";
import { toogleCartWidgetsVisibleAction } from "../..";
import { Link } from "react-router-dom";




type Props = {
  children: React.ReactNode;
};
export const PlaceOrderButton = ({ children }: Props) => {
    const dispatch = useDispatch()
    const countOrder = useSelector(countCartSelector)
    
  return (
    <Link to="/order"><button
      onClick={() =>
        countOrder != 0
          ? dispatch(toogleCartWidgetsVisibleAction())
          : dispatch(toogleCartWidgetsVisibleAction())
      }
      className="group m-auto flex w-full flex-col items-center rounded-3xl border-2 border-red-400 py-3 text-3xl font-light text-red-400 transition-all duration-500 hover:bg-red-500 hover:text-white sm:w-[500px]"
    >
      {children}
    </button>
    </Link>
  );
};
