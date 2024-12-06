import { BigButton, colorsbutton } from "../../../6shared/button";

export const OrderPayButton = () => {
  const payClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return <BigButton color={colorsbutton.fill_green_border} onClick={(e) => payClick(e)}>Оплатить заказ</BigButton>;
};
