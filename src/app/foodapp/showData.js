"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, removeOne, add, total, open, reset } from "./slice";
import OrderConfirm from "./confirm";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.products.items);
  const totalPrice = useSelector((state) => state.products.totalPrice);
  const Confirm = useSelector((state) => state.products.productsItems);
  const handleRemove = (id) => {
    dispatch(removeItem({ id }));
    dispatch(total());
    console.log(id);
  };

  const ConfirmProducts = () => {
    dispatch(open());
  };

  const handleRemoveOne = (product) => {
    const itemInCart = cartItems.find((item) => item.id === product.id);
    if (itemInCart.quantity > 1) {
      dispatch(removeOne(product));
    } else {
      dispatch(removeItem(product));
    }
    dispatch(total());
  };

  const handleAdd = (product) => {
    const itemInCart = cartItems.find((item) => item.id === product.id);
    if (itemInCart.quantity >= 1) {
      dispatch(add(product));
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <div className="mb-4">
        {console.log(cartItems)}
        {cartItems.length > 0 ? (
          <div>
            <h2 className="text-xl font-semibold text-red-700 mb-4">
              Your Cart ({cartItems.length})
            </h2>
            {cartItems.map((item) => (
              <div
                className="flex justify-between gap-10 items-center  border-b-[1px]  py-4  border-gray-400"
                key={item.id}
              >
                <div>
                  <span className="font-[600]   text-[15px] text-justify">
                    {item.title}
                  </span>

                  <div className="text-sm flex items-center gap-5 justify-between ">
                    <div className="flex items-center gap-5  ">
                      <span className="text-orange-700 font-[900] text-[16px] ">
                        {item.quantity} x
                      </span>
                      <span className="text-[14px] text-gray-400 font-[400]">
                        @${item.price}
                      </span>
                      <span className="text-[14px] text-orange-900 font-[600]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>

                      <div className="mt-2 flex justify-between items-center gap-10 rounded-full font-semibold border-[2px]  bg-[#d03c0c]  py-2 px-2  ">
                        <button
                          onClick={() => handleRemoveOne(item)}
                          className="flex items-center justify-center w-6 h-6  rounded-full border-[2px] border-white text-[21px]  text-white font-[900] "
                        >
                          -
                        </button>

                        <button
                          onClick={() => handleAdd(item)}
                          className="flex items-center justify-center w-6 h-6 bg-white text-red-400 rounded-full text-[21px]  font-[900] "
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <p
                  onClick={() => handleRemove(item.id)}
                  className="text-gray-400 px-[6px]  rounded-full border-[2px] border-gray-400"
                >
                  ✖
                </p>
              </div>
            ))}

            <div className="flex justify-between items-center border-t pt-4">
              <span className="font-[500] text-[20px] ">Order Total</span>
              <span className="text-xl font-[700]">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <img src="https://aleointernational.com/img/empty-cart-yellow.png"></img>
          </div>
        )}
      </div>

      {cartItems.length > 0 ? (
        <div>
          <div className="mt-4 flex items-center text-sm tetxt-center bg-orange-200 p-5">
            <span className="w-4 h-4 mr-2 rounded-full bg-green-200 flex justify-center items-center text-green-700 font-bold">
              ✔
            </span>
            <span>
              This is a <strong>carbon-neutral</strong> delivery
            </span>
          </div>

          <button
            onClick={ConfirmProducts}
            className="mt-4 w-full  bg-[#d03c0c]  text-white py-3 rounded-full font-semibold hover:bg-[#ec5623]  transition-colors "
          >
            Confirm Order
          </button>
        </div>
      ) : (
        ""
      )}
      {Confirm && <OrderConfirm />}
    </div>
  );
}
