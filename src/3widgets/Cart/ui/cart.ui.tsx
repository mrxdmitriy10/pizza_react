import { useDispatch, useSelector } from "react-redux";
import { selectors, TitemCart } from "..";
import { actions } from "../../../2pages/Pizzas";


//cartlist
export const CartWidget: React.FC = () => {
  const dispatch = useDispatch();
  const countOrder = useSelector(selectors.count);
  const orderList = useSelector(selectors.orderList);
  const price = useSelector(selectors.price);
  const isVisivble = useSelector(selectors.isVisivble);

  return (
    <>
      {isVisivble&&orderList &&
        orderList.map((itemPizza: TitemCart, index: number) => (
          <div
            onClick={() => dispatch(actions.deleteFromCart(index))}
            key={index}
            className="grid cursor-none grid-cols-3 gap-3 p-5 py-3 text-center text-xl font-light transition-all duration-500 ease-in-out hover:bg-red-500 hover:text-white lg:py-0"
          >
            <div className="w-full">{itemPizza.name}</div>
            <div>{itemPizza.size}</div>
            <div className="">{itemPizza.price} р</div>
          </div>
        ))}
      {price ? (
        <button
          onClick={() =>
            !price
              ? dispatch(actions.toogleCartVisible())
              : dispatch(actions.toogleCartVisible())
          }
          className="group m-auto flex w-full flex-col items-center rounded-3xl border-2 border-red-400 py-3 text-3xl font-light text-red-400 transition-all duration-500 hover:bg-red-500 hover:text-white sm:w-[500px]"
        >
          <div>{countOrder}</div>
          <div className="text-red text-sm group-hover:text-white">
            Оформить заказ
          </div>
        </button>
      ) : (
        <></>
      )}
    </>
  );
};
