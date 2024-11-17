import { useDispatch, useSelector } from "react-redux";
import { RootState} from "./store";

import cartSVG from "./assets/cart.svg"
import {

  addtoCart,

  deleteFromCart,

  itemCartType,
  pizzaType,

  resetCartData,

  toogleCartVisible,
} from "./slices";

//cartlist
const Cart = () => {
  const dispatch = useDispatch();

  
  const cartData = useSelector((state: RootState) => state.cartReducer.data);
  return !cartData.length ? (
    <>Пусто</>
  ) : (
    <>
      {cartData.map((itemPizza: itemCartType, index) => (
        <div
          onClick={() => dispatch(deleteFromCart(index))}
          key={index}
          className="grid cursor-none grid-cols-3 text-xl text-center gap-3 p-5 py-3 font-light transition-all duration-500 ease-in-out hover:bg-red-500 hover:text-white lg:py-0"
        >
          <div className="w-full">{itemPizza.name}</div>
          <div>{itemPizza.size}</div>
          <div className="">{itemPizza.price} р</div>
        </div>
      ))}
    </>
  );
};

function App() {
  const dispatch = useDispatch();
  const available_pizza = useSelector(
    (state: RootState) => state.pizzaReducer.data,
  );
  const cartVisible = useSelector((state: RootState) =>state.cartReducer.visible)



  const allPrice = useSelector((state: RootState) => state.cartReducer.price);

  const cartCount = useSelector((state: RootState) => state.cartReducer.count);
  return (
    <>
      <div className="flex justify-center p-0">
        <div className="flex w-full max-w-[900px] flex-col gap-4">
          <div className="flex justify-end">
            <button onClick={() => dispatch(toogleCartVisible())} className="flex gap-2 justify-center items-center text-2xl font-light btn border-1 rounded-xl border-orange-400 border-opacity-10  p-3  text-orange-500">
              <img width={30} src={cartSVG} alt="Корзина"></img> {cartCount}
            </button>
          </div>
          {
            cartVisible && (
              <div className="flex flex-col py-10 items-center text-center">
            <div>Корзина</div>
            <div className="w-full sm:w-[500px] transition-all duration-1000 ease-in-out">
              <Cart />
            </div>
            
          </div>
            )
          }

          {allPrice ? (
              <button onClick={() => !cartVisible?dispatch(toogleCartVisible()):dispatch(resetCartData())} className="group transition-all duration-500 border-2 flex flex-col items-center sm:w-[500px] w-full m-auto rounded-3xl border-red-400 py-3 text-3xl font-light text-red-400 hover:bg-red-500 hover:text-white">
                <div>{allPrice}</div>
                <div className=" text-red text-sm  group-hover:text-white">
                  Оформить заказ
                </div>
              </button>
            ) : (
              <></>
            )}

          

          <div className="flex flex-col gap-16 p-4">
            {available_pizza.map((i: pizzaType) => (
              <div className="group transition-all duration-500 ease-in-out flex w-full flex-col items-center justify-center gap-5 rounded-md hover:text-amber-700">
                <div className="px-3 text-5xl sm:text-6xl font-thin text-orange-800 transition-all duration-300 ease-linear group-hover:bg-orange-700 group-hover:text-white">
                  {i.name}
                </div>
                <div className="max-w-80 pl-5">

                    <img src={`${i.img}`} alt="sds" />

                </div>

                <div className="text-center">{i.description}</div>
                <div className="flex">
                  {i.variant.map((params) => {
                    return (
                      <div
                        className="flex cursor-none flex-col items-center rounded-md px-3 py-3 hover:bg-orange-300 lg:py-0"
                        onClick={() =>
                          dispatch(
                            addtoCart({
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
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
