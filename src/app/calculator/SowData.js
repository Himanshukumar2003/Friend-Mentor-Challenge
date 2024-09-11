"use client";

import React, { useState } from "react";

export default function TipCalculator() {
  const [amount, setAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [people, setPeople] = useState(1);

  const handleAmountChange = (e) => {
    setAmount(parseFloat(e.target.value) || 0);
  };

  const handleTipChange = (tip) => {
    setTipPercentage(tip);
  };

  const handlePeopleChange = (e) => {
    setPeople(parseFloat(e.target.value) || 1);
  };

  const calculateTipAmount = () => {
    return ((amount * tipPercentage) / 100).toFixed(2);
  };

  const calculateTotalPerPerson = () => {
    const totalTip = (amount * tipPercentage) / 100;
    const totalAmount = amount + totalTip;
    return (totalAmount / people).toFixed(2);
  };

  const resetCalculator = () => {
    setAmount(0);
    setTipPercentage(0);
    setPeople(1);
  };

  const tipOptions = [5, 10, 15, 25, 50];

  return (
    <div className="  flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-[40px] shadow-lg p-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div>
          <label className="block text-green-900 text-sm font-bold mb-2">
            Bill
          </label>
          <div className="relative mb-4">
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              placeholder="0"
              className="w-full px-4 py-2 border rounded-md text-[#08444c] font-[700] text-[28px] text-right focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              $
            </span>
          </div>

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select Tip %
          </label>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {tipOptions.map((tip) => (
              <button
                key={tip}
                onClick={() => handleTipChange(tip)}
                className="bg-[#08444c] text-white py-2 rounded-md hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                {tip}%
              </button>
            ))}
            <input
              onChange={(e) => handleTipChange(parseFloat(e.target.value))}
              type="number"
              placeholder="Custom"
              className="w-full px-4 py-2 border rounded-md text-right focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Number of People
          </label>
          <div className="relative mb-4">
            <input
              type="number"
              value={people}
              onChange={handlePeopleChange}
              placeholder="0"
              className="w-full px-4 py-2 border rounded-md text-right focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm-7 7a7 7 0 0114 0H3z" />
              </svg>
            </span>
          </div>
        </div>

        <div className="bg-teal-800 p-6 rounded-lg w-full mx-auto">
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-sm text-white">Tip Amount</p>
              <p className="text-xs text-teal-400">/ person</p>
            </div>
            <div className="text-2xl font-bold text-teal-400">
              ${calculateTipAmount()}
            </div>
          </div>

          <div className="flex justify-between mb-6">
            <div>
              <p className="text-sm text-white">Total</p>
              <p className="text-xs text-teal-400">/ person</p>
            </div>
            <div className="text-2xl font-bold text-teal-400">
              ${calculateTotalPerPerson()}
            </div>
          </div>

          <button
            className="bg-teal-300 text-teal-900 font-bold py-2 px-4 rounded-md w-full hover:bg-teal-400 mt-10"
            onClick={resetCalculator}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}
