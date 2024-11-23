import cartSVG from'./cart.svg'

import { actions, selectors } from "..";

import CartWidget from "../../../3widgets/Cart";
import { Tpizza } from '../../../5entities/Pizza';
import { useDispatch, useSelector } from 'react-redux';








export default function PizzasPage (){
  const dispatch = useDispatch();
  const available_pizza = useSelector(selectors.available_pizza);
  const count = useSelector(selectors.count);

  return (
    <>
      <div className="flex justify-center p-0">
        <div className="flex w-full max-w-[900px] flex-col gap-4">
          <div className="flex justify-end">
            <button onClick={() => dispatch(actions.toogleCartVisible())} className="flex gap-2 justify-center items-center text-2xl font-light btn border-1 rounded-xl border-orange-400 border-opacity-10  p-3  text-orange-500">
              <img width={30} src={cartSVG} alt="Корзина"></img> {count}
            </button>
          </div>
          {
           
              <CartWidget />

            
          }

          

          

          <div className="flex flex-col gap-16 p-4">
            {available_pizza.map((i: Tpizza, index:number) => (
              <div key={index} className="group transition-all duration-500 ease-in-out flex w-full flex-col items-center justify-center gap-5 rounded-md hover:text-amber-700">
                <div className="px-3 text-5xl sm:text-6xl font-thin text-orange-800 transition-all duration-300 ease-linear group-hover:bg-orange-700 group-hover:text-white">
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
          </div>
        </div>
      </div>
    </>
  );
}