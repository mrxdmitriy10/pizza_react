import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { orderListCartSelector } from "../../../5entities/Order";
import { PayorderBtn } from "../../../4feature/PayOrder";
import { TFormState } from "../model/OrderFormWidget.types";

export const OrderFormWidget = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TFormState>();
  const orderList = useSelector(orderListCartSelector);

  const onSubmit = (formData: TFormState): void => {
    if (orderList.length) {
      console.log({ formData, orderList });
    }
  };

 
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="m-auto flex w-3/4 flex-col gap-4"
      >
        <div className="flex flex-col justify-between gap-4 transition-all md:flex-row">
          <input
            aria-invalid={errors.Name ? "true" : "false"}
            className="w-full rounded-full border-2 p-4 text-lg"
            type="text"
            placeholder="Имя"
            {...register("Name", {
              required: "Заполните свое имя",
              maxLength: 10,
            })}
          />

          <input
            aria-invalid={errors.Mobile ? "true" : "false"}
            placeholder="Телефон"
            className="w-full rounded-full border-2 p-4 text-lg invalid:border-red-500"
            type="text"
            {...register("Mobile", {
              required: "Поле телефон обязательно для ввода",
              pattern: {
                value:
                  /^(\+7|7|8)[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/,
                message: "Неверный формат телефона",
              },
            })}
          />
        </div>

        <div className="flex flex-col font-mono text-sm text-red-400">
          {errors.Name && errors.Name.type === "required" && (
            <span role="alert">*{errors.Name.message?.toString()}</span>
          )}
          {errors.Mobile && errors.Mobile.type === "required" && (
            <span role="alert">*{errors.Mobile.message?.toString()}</span>
          )}

          {errors.Mobile && errors.Mobile.type === "pattern" && (
            <span role="alert">*{errors.Mobile.message?.toString()}</span>
          )}
        </div>

        <fieldset className="grid grid-cols-2 gap-4">
          <legend className="sr-only">Delivery</legend>

          <div>
            <label
              htmlFor="DeliveryType_Delivery"
              className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-amber-600 has-[:checked]:ring-1 has-[:checked]:ring-amber-500"
            >
              <div>
                <p className="text-orange-600">Самовывоз</p>

                <p className="mt-1 text-gray-900 text-opacity-50">-5%</p>
              </div>

              <input
                {...register("DeliveryType", {
                  required: "Выберите способ получения",
                })}
                id="DeliveryType_Delivery"
                type="radio"
                value="Delivery"
                className="size-5 border-gray-300 text-amber-500"
              />
            </label>
          </div>

          <div>
            <label
              htmlFor="DeliveryType_Pickup"
              className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-amber-600 has-[:checked]:ring-1 has-[:checked]:ring-amber-600"
            >
              <div>
                <p className="text-orange-600">Доставка</p>

                <p className="mt-1 text-gray-900 text-opacity-50">0 Р</p>
              </div>

              <input
                {...register("DeliveryType", {
                  required: "Выберите способ получения",
                })}
                id="DeliveryType_Pickup"
                type="radio"
                value="Pickup"
                className="size-5 border-gray-300 text-amber-500"
              />
            </label>
          </div>
        </fieldset>
        <div className="flex flex-col font-mono text-sm text-red-400">
          {errors.DeliveryType && errors.DeliveryType.type === "required" && (
            <span role="alert">*{errors.DeliveryType.message?.toString()}</span>
          )}
        </div>

        <PayorderBtn disable={!isValid} fn={handleSubmit(onSubmit)} />
      </form>
    </>
  );
};
