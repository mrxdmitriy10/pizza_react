import { useDispatch, useSelector } from "react-redux";
import { countCartSelector } from "../../../5entities/Order";
import { isVisibleSelector, toogleCartWidgetsVisibleAction } from "../../Cart";
import { Link } from "react-router-dom";
import { BigButton, colorsbutton } from "../../../6shared/button";
import { resetSelectPizza, selectPizzaSelector } from "../../../5entities/Pizza";




type Props = {
  children: React.ReactNode;
  color: colorsbutton
};
export const PlaceOrderButton = ({ children, color }: Props) => {
  const dispatch = useDispatch();
  const countOrder = useSelector(countCartSelector);
  const isVisibleCartrWidget = useSelector(isVisibleSelector)
  const selectPizza = useSelector(selectPizzaSelector)
  const clickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (selectPizza) {
      e.preventDefault()
      dispatch(resetSelectPizza())
      dispatch(toogleCartWidgetsVisibleAction())
      return
    }

    if (countOrder && !isVisibleCartrWidget) {
      e.preventDefault();
      dispatch(toogleCartWidgetsVisibleAction());
    }
  };
  
  return (
    <Link to="/order">
      <BigButton color={color} onClick={clickButton}>{children}</BigButton>
    </Link>
  );
};
