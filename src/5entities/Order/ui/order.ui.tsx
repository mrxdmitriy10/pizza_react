import { useDispatch, useSelector } from "react-redux";
import { deleteFromCartAction, orderListCartSelector, TitemCart } from "..";

export const OrderEntity = () => {
  const orderList = useSelector(orderListCartSelector);
  const dispatch = useDispatch();
  if (orderList.length == 0) return <div className="m-auto">Корзина пуста</div>
  return (
    <div>
      {orderList.map((itemPizza: TitemCart, index: number) => (
        <div
          onClick={() => dispatch(deleteFromCartAction(index))}
          key={index}
          className="grid cursor-none grid-cols-3 gap-3 p-5 py-3 text-center text-xl font-light transition-all duration-500 ease-in-out hover:bg-red-500 hover:text-white lg:py-0"
        >
          <div className="w-full">{itemPizza.name}</div>
          <div>{itemPizza.size}</div>
          <div className="">{itemPizza.price} р</div>
        </div>
      ))}
    </div>
  )
};

