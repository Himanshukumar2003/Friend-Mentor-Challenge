"use client";
import { Container } from "@mui/material";
import { useState } from "react";

export default function Calculator() {
  const [active, setActive] = useState(null);
  const [billAmount, setBillAmount] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [people, setPeople] = useState(1);
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  const [peopleError, setPeopleError] = useState(null);

  const handleBillChange = (event) => {
    const value = parseFloat(event.target.value) || 0;
    setBillAmount(value);
    calculateTipAmount(value, tipPercentage);
    calculateTotalPerPerson(value, tipPercentage, people);
  };

  const handleTipPercentageChange = (tip) => {
    setTipPercentage(tip);
    calculateTipAmount(billAmount, tip);
    calculateTotalPerPerson(billAmount, tip, people);
    setActive(tip);
  };

  const handlePeopleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    if (value <= 0) {
      setPeopleError("Can't be zero");
      setPeople(0);
    } else {
      setPeopleError(null);
      setPeople(value);
      calculateTotalPerPerson(billAmount, tipPercentage, value);
    }
  };

  const calculateTipAmount = (bill, tip) => {
    const tipAmt = (bill * tip) / 100;
    setTipAmount(tipAmt);
  };

  const calculateTotalPerPerson = (bill, tip, numPeople) => {
    if (numPeople > 0) {
      const total = (bill + (bill * tip) / 100) / numPeople;
      setTotalPerPerson(total);
    } else {
      setTotalPerPerson(0);
    }
  };

  const handleReset = () => {
    setBillAmount(0);
    setTipAmount(0);
    setTipPercentage(0);
    setPeople(1);
    setTotalPerPerson(0);
    setActive(null);
    setPeopleError(null);
  };

  const tipOptions = [5, 10, 15, 25, 50];

  return (
    <div className="bg-[#c8e4e4] min-h-screen flex items-center justify-center">
      <Container
        maxWidth="lg"
        className="flex items-center justify-center h-screen"
      >
        <div>
          <h1 className="text-center mb-20 leading-8 text-[18px] font-medium tracking-[10px]">
            SPLI <br />
            TTER
          </h1>
          <div className="w-full max-w-[700px] bg-white rounded-[40px] shadow-md p-6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
              <label
                className="block text-green-900 text-sm font-bold mb-2"
                htmlFor="bill"
              >
                Bill
              </label>
              <div className="relative mb-4">
                <input
                  type="number"
                  id="bill"
                  value={billAmount}
                  onChange={handleBillChange}
                  placeholder="0"
                  className="w-full px-4 py-2 border rounded-md text-[#08444c] font-bold text-[28px] text-right focus:outline-none focus:ring-2 focus:ring-teal-500 box-border"
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
                    onClick={() => handleTipPercentageChange(tip)}
                    className={`bg-[#08444c] text-white py-2 rounded-md hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 ${
                      active === tip ? "bg-teal-400" : ""
                    }`}
                  >
                    {tip}%
                  </button>
                ))}
                <input
                  type="number"
                  value={tipPercentage}
                  onChange={(event) =>
                    handleTipPercentageChange(parseFloat(event.target.value))
                  }
                  placeholder="Custom"
                  className="w-full px-4 py-2 border rounded-md text-right focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <div className="flex justify-between">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="people"
                  >
                    Number of People
                  </label>
                  {peopleError && (
                    <div className="text-red-500 text-sm">{peopleError}</div>
                  )}
                </div>
                <div className="relative mb-4">
                  <input
                    type="number"
                    id="people"
                    value={people}
                    onChange={handlePeopleChange}
                    placeholder="0"
                    className={`w-full px-4 py-2 border rounded-md text-right focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                      peopleError ? "border-red-500" : ""
                    }`}
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
            </div>

            <div className="bg-teal-800 p-6 rounded-[20px] w-full mx-auto">
              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-sm text-white">Tip Amount</p>
                  <p className="text-xs text-teal-400">/ person</p>
                </div>
                <div className="text-4xl font-bold text-teal-400">
                  <span className="text-3xl">$</span> {tipAmount.toFixed(2)}
                </div>
              </div>

              <div className="flex justify-between mb-6">
                <div>
                  <p className="text-sm text-white">Total</p>
                  <p className="text-xs text-teal-400">/ person</p>
                </div>
                <div className="text-4xl font-bold text-teal-400">
                  <span className="text-3xl">$</span>{" "}
                  {totalPerPerson.toFixed(2)}
                </div>
              </div>

              <button
                className="bg-teal-300 text-teal-900 font-bold py-2 px-4 rounded-md w-full hover:bg-teal-400 mt-10"
                onClick={handleReset}
              >
                RESET
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
