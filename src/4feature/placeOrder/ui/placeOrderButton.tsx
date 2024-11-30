import { useDispatch, useSelector } from "react-redux";
import { countCartSelector } from "../../../5entities/Order";
import { isVisibleSelector, toogleCartWidgetsVisibleAction } from "../../Cart";
import { Link } from "react-router-dom";
import { RedButton } from "../../../6shared/button";


type Props = {
  children: React.ReactNode;
};
export const PlaceOrderButton = ({ children }: Props) => {
  const dispatch = useDispatch();
  const countOrder = useSelector(countCartSelector);
  const isVisibleCartrWidget = useSelector(isVisibleSelector)
  const clickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (countOrder && !isVisibleCartrWidget) {
      e.preventDefault();
      dispatch(toogleCartWidgetsVisibleAction());
    }
  };
  
  return (
    <Link to="/order">
      <RedButton onClick={clickButton}>{children}</RedButton>
    </Link>
  );
};
