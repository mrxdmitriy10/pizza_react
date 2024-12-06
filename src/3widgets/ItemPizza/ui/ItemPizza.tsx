import { useDispatch, useSelector } from "react-redux";
import { selectPizzaSelector } from "../../../5entities/Pizza";
import { resetSelectPizza } from "../../../5entities/Pizza";
import { AppDispatch } from "../../../../types/index";
import { addtoCartAction } from "../../../5entities/Order";

export const ItemPizza = () => {
  const onepizza = useSelector(selectPizzaSelector);
  const dispatch = useDispatch<AppDispatch>();

  return (
    onepizza && (
      <div
        onClick={() => dispatch(resetSelectPizza())}
        className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50 bg-blend-saturation"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex w-full max-w-[800px] min-h-[400px] flex-col items-center justify-between gap-2 bg-white p-16 shadow-xl sm:flex-row sm:justify-start sm:py-10"
        >
          <div className="-mt-64 h-full pl-5">
            <img width={300} src={`${onepizza.img}`} alt="sds" />
          </div>





          <div className="flex  flex-col items-center gap-5">
          <div className="flex p-5 flex-col items-center  text-md font-light">
            <div className="flex gap-3 justify-between text-orange-800 transition-all duration-300 ease-linear">
                {onepizza.ingridients.map((ingridient) => (
                    <div>{ingridient}</div>
                ))}
            </div>

          </div>
            <div className="text-sm">{onepizza.description}</div>
            <div className="text-nowrap font-mono text-5xl font-extrabold text-orange-800 transition-all duration-300 ease-linear">
              {onepizza.name.toUpperCase()}
            </div>

            <div className="flex text-sm">
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
        </div>
      </div>
    )
  );
};
