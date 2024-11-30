import { useDispatch, useSelector } from "react-redux";
import { availablePizzasSelector } from "..";
import { Tpizza } from "../../Pizza";
import { addtoCartAction } from "../../Order";

export const pizzaListEntity = () => {
  const availablePizzas = useSelector(availablePizzasSelector);
  const dispatch = useDispatch();
  return (
    <>
      {availablePizzas.map((onepizza: Tpizza, index: number) => (
        <div
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
          <div className="flex">
            {onepizza.variant.map((params, index) => {
              return (
                <div
                  key={index}
                  className="flex cursor-none flex-col items-center rounded-md px-3 py-3 hover:bg-orange-300 lg:py-0"
                  onClick={() =>
                    dispatch(
                      addtoCartAction({
                        name: onepizza.name,
                        size: params.size,
                        price: params.price,
                      }),
                    )
                  }
                >
                  <div>{params.size}</div>
                  <div>{params.price} руб</div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
};

export default pizzaListEntity;
