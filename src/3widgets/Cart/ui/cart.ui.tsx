import { useSelector } from "react-redux";


import OrderEntity from "../../../5entities/Order";
import { countCartSelector } from "../../../5entities/Order";
import PlaceOrderButton from "../../../4feature/placeOrder";
import { isVisibleSelector } from "../../../4feature/Cart";


export const CartWidget: React.FC = () => {
  const countCart = useSelector(countCartSelector);
  const isVisible = useSelector(isVisibleSelector)



  return (
    <> 
      {isVisible && <OrderEntity />}
      {countCart !== 0 && (
        <PlaceOrderButton>
          <div>{countCart}</div>
          <div className="text-red text-sm group-hover:text-white">
            Оформить заказ
          </div>
        </PlaceOrderButton>
      )}
    </>
  );
};
