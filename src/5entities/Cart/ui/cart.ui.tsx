import { useDispatch, useSelector } from "react-redux";
import {actions, selectors, TitemCart}  from "..";




export const CartEntity = () => {
    const orderList = useSelector(selectors.orderList);
    const dispatch = useDispatch();
  return (
    <>
      {orderList.map((itemPizza: TitemCart, index: number) => (
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
    </>
  );
};
