import { RedButton } from "../../../6shared/button";

export const PayorderBtn = ({fn, disable}:{fn: ()=>void, disable: boolean}) => {
    return (
        <RedButton
            disable={disable}
            onClick={fn}
          >
            Оплатить заказ
          </RedButton>
    )
}
