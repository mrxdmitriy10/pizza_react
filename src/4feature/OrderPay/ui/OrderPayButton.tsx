import { RedButton } from "../../../6shared/button";

export const OrderPayButton = () => {
  const payClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return <RedButton onClick={(e) => payClick(e)}>Оплатить заказ</RedButton>;
};
