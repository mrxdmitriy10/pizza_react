import { useDispatch, useSelector } from "react-redux";
import { availablePizzasSelector } from "..";
import { Tpizza } from "../../Pizza";
import { addtoCartAction } from "../../Order";
import { setSelectPizza } from "../../Pizza/models/pizza.model";

export const pizzaListEntity = () => {
  const availablePizzas = useSelector(availablePizzasSelector);
  const dispatch = useDispatch();
  return (
    <>
      {availablePizzas.map((onepizza: Tpizza, index: number) => (
        <div
          onClick={() => dispatch(setSelectPizza(onepizza))}
          key={index}
          className="group flex w-full flex-col items-center justify-center gap-5 rounded-md transition-all duration-500 ease-in-out hover:text-amber-700"
        >
          <div className="px-3 text-5xl font-thin text-orange-800 transition-all duration-300 ease-linear group-hover:bg-orange-700 group-hover:text-white sm:text-6xl">
            {onepizza.name}
          </div>
          <div className="max-w-80 pl-5">
            <img src={`${onepizza.img}`} alt="sds" />
          </div>

          <div className="text-center">{onepizza.description}</div>
          <div className="flex w-3/4">
            <button className="p-5 group-hover:bg-orange-500 transition-all duration-500 ease-in-out group-hover:text-white border-orange-500 border text-orange-600 rounded-full w-full">От {onepizza.variant[0].price}</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default pizzaListEntity;
