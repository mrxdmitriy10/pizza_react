



import CartWidget from "../../../3widgets/Cart";
import { ItemPizza } from "../../../3widgets/ItemPizza";

import PizzaListWidget from '../../../3widgets/PizzaList/';


const PizzasPage = () => {




  return (
    <div className="flex flex-col justify-between">
            <CartWidget />

      <PizzaListWidget />
      <ItemPizza /> 

    </div>
  );
}

export default PizzasPage