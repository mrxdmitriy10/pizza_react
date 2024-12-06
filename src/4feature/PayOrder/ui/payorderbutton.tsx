import { BigButton, colorsbutton } from "../../../6shared/button";

export const PayorderBtn = ({fn, disable}:{fn: ()=>void, disable: boolean}) => {
    return (
        <BigButton
            color={colorsbutton.fill_green_border}
            disable={disable}
            onClick={fn}
          >
            Оплатить заказ
          </BigButton>
    )
}
