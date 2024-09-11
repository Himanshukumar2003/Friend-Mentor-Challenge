"use client";

import { useState } from "react";
import { Container, Grid, Select } from "@mui/material";

import GamepadIcon from "@mui/icons-material/Gamepad";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

export default function StapFrom() {
  // fistStap
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [step, setStap] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [error, setError] = useState({});
  // console.log(error);
  const handleNext = () => {
    const err = errorHandling();
    if (Object.keys(err).length) return;
    if (Object.keys(error).length === 0) {
      setStap(step + 1);
    }
  };

  const previousStep = () => {
    setStap(step - 1);
  };

  const hendelSumit = (event) => {
    event.preventDefault();
  };

  const hendelChenge = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const errorHandling = () => {
    const errors = {};

    if (data.name.trim().length < 3) {
      errors.name = "Please enter your Name";
    }

    if (data.email === "") {
      errors.email = "Please enter your email";
    } else if (!data.email.includes("@") || !data.email.includes(".")) {
      errors.email = "Please enter a valid email address";
    }

    if (data.phone.trim().length !== 10) {
      errors.phone = "Please enter your phone number";
    }

    setError(errors);
    return errors;
  };

  // snd stap

  const [billing, setBilling] = useState("monthly");

  const handleBillingToggle = () => {
    setBilling(billing === "monthly" ? "yearly" : "monthly");
  };

  // calculateTotalPrice

  const calculateTotalPrice = () => {
    const planPrice =
      billing === "monthly"
        ? selectedPlan.monthlyPrice
        : selectedPlan.yearlyPrice;

    const addOnsTotal = AddOn.reduce((total, addOn) => {
      if (selectedAddOns[addOn.id]) {
        const addOnPrice = parseFloat(addOn.price.replace(/[^0-9]/g, ""));
        return total + addOnPrice;
      }
      return total;
    }, 0);

    return planPrice + addOnsTotal;
  };

  const plans = [
    {
      name: "arcade",
      monthlyPrice: 9,
      yearlyPrice: 90,
      icon: <GamepadIcon style={{ fontSize: 40, color: "#FF8A65" }} />,
    },
    {
      name: "advanced",
      monthlyPrice: 12,
      yearlyPrice: 120,
      icon: <VideogameAssetIcon style={{ fontSize: 40, color: "#FF5252" }} />,
    },
    {
      name: "pro",
      monthlyPrice: 15,
      yearlyPrice: 150,
      icon: <SportsEsportsIcon style={{ fontSize: 40, color: "#5C6BC0" }} />,
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(plans[0]);

  const handlePlanSelect = (planName) => {
    const selected = plans.find((plan) => plan.name === planName);
    setSelectedPlan(selected);
  };

  // thridStap

  const AddOn = [
    {
      id: "onlineService",
      title: "Online service",
      description: "Access to multiplayer games",
      price: "+$10/yr",
    },
    {
      id: "largerStorage",
      title: "Larger storage",
      description: "Access to multiplayer games",
      price: "+$20/yr",
    },
    {
      id: "customizableProfile",
      title: "Customizable profile",
      description: "Access to multiplayer games",
      price: "+$50/yr",
    },
  ];

  const [selectedAddOns, setSelectedAddOns] = useState({
    onlineService: false,
    largerStorage: true,
    customizableProfile: false,
  });

  const handleCheckboxChange = (addOn) => {
    setSelectedAddOns({
      ...selectedAddOns,
      [addOn]: !selectedAddOns[addOn],
    });
  };

  // forthStap
  console.log(selectedAddOns);
  const steps = [
    {
      step: 1,
      label: "YOUR INFO",
    },
    {
      step: 2,
      label: "SELECT PLAN",
    },
    {
      step: 3,
      label: "ADD-ONS",
    },
    {
      step: 4,
      label: "SUMMARY",
    },
  ];

  return (
    <div className="bg-gray-100 h-[100vh] flex justify-center mx-auto items-center">
      <Container maxWidth="lg" className="">
        <div className="rounded-[40px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-10 max-w-[100%] lg:max-w-[80%] m-auto h-full">
          <Grid container spacing={4} className="h-full">
            <Grid
              item
              sm={12}
              lg={4}
              className="w-full h-full flex items-center justify-center"
            >
              <div className="flex items-center justify-center">
                <ul className="bg-img p-4 bg-white  rounded-xl h-full">
                  {steps.map((stepItem, index) => (
                    <li
                      key={index}
                      className="mb-6 flex items-center text-white"
                    >
                      <span
                        className={`rounded-full w-8 h-8 flex items-center justify-center border-2${
                          step === stepItem.step
                            ? "p-2 rounded-full bg-blue-500 "
                            : ""
                        }`}
                      >
                        {stepItem.step}
                      </span>
                      <span className="ml-4">{stepItem.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Grid>
            <Grid item sm={12} lg={8} className="">
              <form onSubmit={hendelSumit}>
                {step === 1 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Personal info</h2>
                    <p className="text-gray-500 mb-6">
                      Please provide your name, email address, and phone number.
                    </p>

                    <div className="mb-4">
                      <div className="flex justify-between">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="name"
                        >
                          Name
                        </label>
                        {error.name && (
                          <p className="text-red-500">{error.name}</p>
                        )}
                      </div>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={data.name}
                        onChange={hendelChenge}
                        placeholder="e.g. Stephen King"
                      />
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="email"
                        >
                          Email Address
                        </label>
                        {error.email && (
                          <p className="text-red-500">{error.email}</p>
                        )}
                      </div>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={data.email}
                        onChange={hendelChenge}
                        placeholder="e.g. stephenking@lorem.com"
                      />
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="phone"
                        >
                          Phone Number
                        </label>
                        {error.phone && (
                          <p className="text-red-500">{error.phone}</p>
                        )}
                      </div>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phone"
                        required
                        type="tel"
                        name="phone"
                        value={data.phone}
                        onChange={hendelChenge}
                        placeholder="e.g. +1 234 567 890"
                      />
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div className="flex flex-col items-center p-6 bg-white-100">
                    <h1 className="text-3xl font-bold mb-2">
                      Select your plan
                    </h1>
                    <p className="text-gray-500 mb-8">
                      You have the option of monthly or yearly billing
                    </p>

                    <div className="flex space-x-4 mb-8">
                      {plans.map((plan) => (
                        <div
                          key={plan.name}
                          onClick={() => handlePlanSelect(plan.name)}
                          className={`border rounded-lg p-6 flex flex-col items-center cursor-pointer ${
                            selectedPlan.name === plan.name
                              ? "border-blue-500 border-[2px]"
                              : "border-gray-300"
                          }`}
                        >
                          {plan.icon}
                          <h2 className="text-lg font-bold mt-4">
                            {plan.name}
                          </h2>
                          <p className="text-gray-500">
                            {billing === "monthly"
                              ? `$${plan.monthlyPrice} / mo`
                              : `$${plan.yearlyPrice} / yr`}
                          </p>
                          {billing === "yearly" && (
                            <p className="text-2sm font-[500] text-blue-950 text-center">
                              2 months free
                            </p>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center">
                      <span className="mr-2">Monthly</span>
                      <div
                        onClick={handleBillingToggle}
                        className="relative w-16 h-8 bg-[#02295a] rounded-full shadow-inner cursor-pointer"
                      >
                        <div
                          className={`absolute top-0 bottom-0 m-auto w-7 h-7 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                            billing === "yearly" ? "translate-x-[100%]" : ""
                          }`}
                        ></div>
                      </div>
                      <span className="ml-2">Yearly</span>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    {AddOn.map((addon) => (
                      <div
                        key={addon.id}
                        className="border p-4 mb-4 rounded-lg"
                      >
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedAddOns[addon.id]}
                            onChange={() => handleCheckboxChange(addon.id)}
                            className="form-checkbox h-5 w-5 text-blue-600"
                          />
                          <div className="ml-4">
                            <span className="font-medium text-lg">
                              {addon.title}
                            </span>
                            <p className="text-gray-500 text-sm">
                              {addon.description}
                            </p>
                          </div>
                          <span className="ml-auto text-blue-600 font-bold">
                            {addon.price}
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                )}

                {step === 4 &&
                  (!isSubmitted ? (
                    <div>
                      <h2 className="text-xl font-bold text-blue-900">
                        Finishing up
                      </h2>
                      <p className="text-gray-500 mb-4">
                        Double-check everything looks OK before confirming
                      </p>

                      <div className="border-b border-gray-300 pb-4 mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700 font-semibold">
                            {selectedPlan.name} ({billing})
                          </span>
                          <p className="text-lg font-bold">
                            {billing === "monthly"
                              ? `$${selectedPlan.monthlyPrice} / mo`
                              : `$${selectedPlan.yearlyPrice} / yr`}
                          </p>
                        </div>
                        <p onClick={() => setStap(2)}>Change</p>
                      </div>

                      {Object.keys(selectedAddOns).map(
                        (key) =>
                          selectedAddOns[key] && (
                            <div className="mb-2">
                              {console.log(selectedAddOns)}
                              <div key={key} className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-gray-700">
                                    {
                                      AddOn.find((addon) => addon.id === key)
                                        .title
                                    }
                                  </span>
                                  <span className=" text-gray-900">
                                    {
                                      AddOn.find((addon) => addon.id === key)
                                        .price
                                    }
                                  </span>
                                </div>
                              </div>
                            </div>
                          )
                      )}

                      <div className="border-t border-gray-300 pt-4 mt-4 flex justify-between items-center">
                        <span className="text-gray-700 font-semibold">
                          Total (per month)
                        </span>
                        <span className="text-blue-700 text-xl font-bold">
                          ${calculateTotalPrice()}/
                          {billing === "monthly" ? "mo" : "yr"}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center space-x-2 gap-5 justify-center">
                      <img src="https://multi-step-form-frontmentor.vercel.app/assets/icon-thank-you.svg" />

                      <p className="text-gray-600">
                        Thank you for using our subscription service! Enjoy the
                        platform, and feel free to reach out to us at
                        <a
                          href="mailto:support@loremgaming.com"
                          className="underline"
                        >
                          support@loremgaming.com
                        </a>{" "}
                        if you need any assistance.
                      </p>
                    </div>
                  ))}

                {!isSubmitted && (
                  <div className="flex items-center justify-between mt-20">
                    {step > 1 && (
                      <button
                        onClick={previousStep}
                        className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
                      >
                        Go Back
                      </button>
                    )}

                    {step < 4 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                      >
                        Next Step
                      </button>
                    ) : (
                      <button
                        type="submit"
                        onClick={() => setIsSubmitted(true)}
                        className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                      >
                        Confirm
                      </button>
                    )}
                  </div>
                )}
              </form>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
