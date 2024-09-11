"use client";

import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "FormData",
  initialState: {
    data: {},
  },
  reducers: {
    saveFormData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { saveFormData } = Slice.actions;

const handleBillAmount = (event) => {
  const value = parseFloat(event.target.value) || 0;
  setBillAmount(value);
  handlePercentageChange();
  handlePerPersonAmount();
};

const handlePercentageChange = () => {
  const tip = (billAmount * tipPercentage) / 100;
  setTipAmount(tip);
};

const handleTipAmount = (tip) => {
  setTipPercentage(tip);
  handlePercentageChange();
};

const handlePeopleAmount = (event) => {
  const value = parseFloat(event.target.value) || 1;
  setPeople(value);
  handlePerPersonAmount(value);
};

const handlePerPersonAmount = (peopleCount) => {
  if (peopleCount > 0) {
    const total = (billAmount + tipAmount) / peopleCount;
    setTotalPerPerson(total);
  } else {
    setTotalPerPerson(0);
  }
};

const handleBillChange = (event) => {
  const value = parseFloat(event.target.value);
  setBillAmount(value);
  calculateTipAmount();
  calculateTotalPerPerson();
};

const handleTipPercentageChange = (tip) => {
  setTipPercentage(tip);
  calculateTipAmount();
};

const handlePeopleChange = (event) => {
  const value = parseFloat(event.target.value);
  setPeople(value);
  calculateTotalPerPerson();
};

const calculateTipAmount = () => {
  const tip = (billAmount * tipPercentage) / 100;
  setTipAmount(tip);
};

const calculateTotalPerPerson = () => {
  if (people > 0) {
    const total = (billAmount + tipAmount) / people;
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
};

const tipOptions = [5, 10, 15, 25, 50];
