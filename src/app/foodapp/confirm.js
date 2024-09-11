"use client";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, total, reset } from "./slice";
import { useState } from "react";
import Link from "next/link";
export default function OrderConfirm() {
  const cartItems = useSelector((state) => state.products.items);
  const totalPrice = useSelector((state) => state.products.totalPrice);
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
        </div>
        <h2 className="text-xl font-bold">Order Confirmed</h2>
        <p className=" text-gray-500 mb-6">We hope you enjoy your food!</p>
        <div className="bg-orange-50 p-4 rounded-md mb-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between  mb-2"
            >
              <div className="flex">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-md mr-4"
                />
                <div className="flex flex-col justify-center   gap-2 ">
                  <h3 className="font-medium text-sm  line-clamp-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center j gap-5">
                    <p className="text-sm  text-orange-700 font-[900] text-[16px] ">
                      {item.quantity}x
                    </p>
                    <p>@ ${item.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
              <p className="font-medium">
                ${(item.quantity * item.price).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="flex justify-between mb-4">
          <span className="font-medium text-[21px] text-gray-700">
            Order Total
          </span>
          <span className="font-[600] text-gray-600 text-4xl">
            ${totalPrice}
          </span>
        </div>

        {/* Button */}
        <div
          onClick={handleReset}
          className="w-full  bg-[#d03c0c]  text-white py-2 rounded-lg hover:bg-[#fc7548e8]  transition duration-300 flex items-center justify-center"
        >
          Start New Order
        </div>
      </div>
    </div>
  );
}
