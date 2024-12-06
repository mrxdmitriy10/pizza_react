import { useDispatch, useSelector } from "react-redux";


import OrderEntity from "../../../5entities/Order";
import { countCartSelector } from "../../../5entities/Order";
import PlaceOrderButton from "../../../4feature/placeOrder";
import { hideCartWidgetsAction, isVisibleSelector } from "../../../4feature/Cart";
import { selectPizzaSelector } from "../../../5entities/Pizza";
import { colorsbutton } from "../../../6shared/button";


export const CartWidget: React.FC = () => {
  const countCart = useSelector(countCartSelector);
  const isVisible = useSelector(isVisibleSelector)

  const selectPizza = useSelector(selectPizzaSelector)
  const dispatch = useDispatch()
  
  if (selectPizza) {
    dispatch(hideCartWidgetsAction())
  }
  

  return (

    <div className="fixed bottom-0 left-0 sm:bottom-auto z-50 w-full bg-white shadow-inner-md shadow-black border-red-500"> 
      {isVisible && <OrderEntity />}
      {countCart !== 0 && (
        <PlaceOrderButton color={colorsbutton.fill_green}>
          <div>{countCart}</div>
          <div className="text-red text-sm">
            Оформить заказ
          </div>
        </PlaceOrderButton>
      )}
    </div>

  );
};
