import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { RedButton } from "../../../6shared/button";
import OrderEntity, { countCartSelector } from "../../../5entities/Order";

import { TittleText } from "../../../6shared/components/TittleText";
import { OrderFormWidget } from "../../../3widgets/OrderForm/ui/OrderFormWidget";


const ButtonBacktoChooseProduct = () => (
  <Link to="/">
    <RedButton
      onClick={() => {
        return;
      }}
    >
      Выбрать пиццу
    </RedButton>
  </Link>
);

const OrderPage = () => {
  const orderCount = useSelector(countCartSelector);
  return (
    <div className="flex flex-col gap-5 item-center">
      <TittleText text="Корзина" />

      <OrderEntity />
      

      {orderCount > 0 ? (
        <>
          <TittleText text="Форма заказа" />
          <OrderFormWidget />
        </>
      ):<ButtonBacktoChooseProduct />}
    </div>
  );
};

export default OrderPage;
