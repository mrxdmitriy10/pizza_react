import { useDispatch, useSelector } from "react-redux";
import { actions, selectors, Tpizza } from "..";

export const pizzaListEntity = () => {
  const dispatch = useDispatch()
  const available_pizza = useSelector(selectors.available_pizza);
  return (
    <>
      {available_pizza.map((i: Tpizza, index: number) => (
        <div
          key={index}
          className="group flex w-full flex-col items-center justify-center gap-5 rounded-md transition-all duration-500 ease-in-out hover:text-amber-700"
        >
          <div className="px-3 text-5xl font-thin text-orange-800 transition-all duration-300 ease-linear group-hover:bg-orange-700 group-hover:text-white sm:text-6xl">
            {i.name}
          </div>
          <div className="max-w-80 pl-5">
            <img src={`${i.img}`} alt="sds" />
          </div>

          <div className="text-center">{i.description}</div>
          <div className="flex">
            {i.variant.map((params, index) => {
              return (
                <div
                  key={index}
                  className="flex cursor-none flex-col items-center rounded-md px-3 py-3 hover:bg-orange-300 lg:py-0"
                  onClick={() =>
                    dispatch(
                      actions.addtoCart({
                        name: i.name,
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
