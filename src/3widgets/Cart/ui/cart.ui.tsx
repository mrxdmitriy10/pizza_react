import { useSelector } from "react-redux";

import { selectors } from "..";
import CartEntity from "../../../5entities/Cart";
import PlaceOrderFeature from "../../../4feature/Cart/PlaceOrder";

export const CartWidget: React.FC = () => {
  const countOrder = useSelector(selectors.count);
  const isVisivble = useSelector(selectors.isVisivble);

  return (
    <>
      {isVisivble && <CartEntity />}

      {countOrder !== 0 && <PlaceOrderFeature />}
    </>
  );
};
