import { useSelector } from "react-redux";


import CartEntity from "../../../5entities/Cart";
import { countCartSelector } from "../../../5entities/Cart";
import PlaceOrderButton from "../../../4feature/Cart/placeOrder";
import { isVisibleSelector } from "../../../4feature/Cart";


export const CartWidget: React.FC = () => {
  const countCart = useSelector(countCartSelector);
  const isVisible = useSelector(isVisibleSelector)

  console.log(isVisible);

  return (
    <> 
      {isVisible && <CartEntity />}
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
