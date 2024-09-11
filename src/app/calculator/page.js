// "use client";

// import { useState } from "react";
// import { Container, Grid } from "@mui/material";

// import GamepadIcon from "@mui/icons-material/Gamepad";
// import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
// import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

// export default function StapFrom() {
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });
//   const [step, setStap] = useState(1);

//   const hendelNext = () => {
//     setStap(step + 1);
//   };

//   const previousStep = () => {
//     setStap(step - 1);
//   };

//   const hendelSumit = (e) => {
//     e.preventDefault();
//     console.log(data);
//   };

//   const hendelChenge = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const hendelStapChenge = (index) => {
//     setStap(index);
//   };

//   const [billing, setBilling] = useState("monthly");

//   const handleBillingToggle = () => {
//     setBilling(billing === "monthly" ? "yearly" : "monthly");
//   };

//   const plans = [
//     {
//       name: "arcade",
//       monthlyPrice: 9,
//       yearlyPrice: 90,
//       icon: <GamepadIcon style={{ fontSize: 40, color: "#FF8A65" }} />,
//     },
//     {
//       name: "advanced",
//       monthlyPrice: 12,
//       yearlyPrice: 120,
//       icon: <VideogameAssetIcon style={{ fontSize: 40, color: "#FF5252" }} />,
//     },
//     {
//       name: "pro",
//       monthlyPrice: 15,
//       yearlyPrice: 150,
//       icon: <SportsEsportsIcon style={{ fontSize: 40, color: "#5C6BC0" }} />,
//     },
//   ];

//   const [selectedPlan, setSelectedPlan] = useState(plans[0]);

//   const handlePlanSelect = (planName) => {
//     const selected = plans.find((plan) => plan.name === planName);
//     setSelectedPlan(selected);
//   };

//   const [selectedAddOns, setSelectedAddOns] = useState({
//     onlineService: false,
//     largerStorage: true,
//     customizableProfile: false,
//   });

//   const handleCheckboxChange = (addOn) => {
//     setSelectedAddOns({
//       ...selectedAddOns,
//       [addOn]: !selectedAddOns[addOn],
//     });
//   };

//   const steps = [
//     {
//       step: 1,
//       label: "YOUR INFO",
//     },
//     {
//       step: 2,
//       label: "SELECT PLAN",
//     },
//     {
//       step: 3,
//       label: "ADD-ONS",
//     },
//     {
//       step: 4,
//       label: "SUMMARY",
//     },
//   ];

//   return (
//     <div className="bg-gray-100 h-[100vh] flex justify-center mx-auto items-center">
//       <Container maxWidth="lg">
//         <div className="rounded-[40px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-10 max-w-[80%]">
//           <Grid container spacing={4}>
//             <Grid item xs={12} sm={4}>
//               <ul className="bg-img p-4 bg-white rounded-xl">
//                 {steps.map((stepItem, index) => (
//                   <li
//                     key={index}
//                     className="mb-6 flex items-center text-white cursor-pointer"
//                     onClick={() => hendelStapChenge(stepItem.step)}
//                   >
//                     <span className="rounded-full w-8 h-8 flex items-center justify-center border-2">
//                       {stepItem.step}
//                     </span>
//                     <span className="ml-4">{stepItem.label}</span>
//                   </li>
//                 ))}
//               </ul>
//             </Grid>
//             <Grid item xs={12} sm={8}>
//               {step === 1 && (
//                 <div>
//                   <h2 className="text-2xl font-bold mb-4">Personal info</h2>
//                   <p className="text-gray-500 mb-6">
//                     Please provide your name, email address, and phone number.
//                   </p>
//                   <form onSubmit={hendelSumit}>
//                     <div className="mb-4">
//                       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//                         Name
//                       </label>
//                       <input
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         id="name"
//                         type="text"
//                         name="name"
//                         required
//                         value={data.name}
//                         onChange={hendelChenge}
//                         placeholder="e.g. Stephen King"
//                       />
//                     </div>
//                     <div className="mb-4">
//                       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                         Email Address
//                       </label>
//                       <input
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         id="email"
//                         type="email"
//                         name="email"
//                         required
//                         value={data.email}
//                         onChange={hendelChenge}
//                         placeholder="e.g. stephenking@lorem.com"
//                       />
//                     </div>
//                     <div className="mb-4">
//                       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
//                         Phone Number
//                       </label>
//                       <input
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         id="phone"
//                         required
//                         type="tel"
//                         name="phone"
//                         value={data.phone}
//                         onChange={hendelChenge}
//                         placeholder="e.g. +1 234 567 890"
//                       />
//                     </div>
//                   </form>
//                 </div>
//               )}
//               {step === 2 && (
//                 <div className="flex flex-col items-center p-6 bg-white-100">
//                   <h1 className="text-3xl font-bold mb-2">Select your plan</h1>
//                   <p className="text-gray-500 mb-8">
//                     You have the option of monthly or yearly billing
//                   </p>
//                   <div className="flex space-x-4 mb-8">
//                     {plans.map((plan) => (
//                       <div
//                         key={plan.name}
//                         onClick={() => handlePlanSelect(plan.name)}
//                         className={`border rounded-lg p-6 flex flex-col items-center cursor-pointer ${
//                           selectedPlan.name === plan.name
//                             ? "border-blue-500 border-[2px]"
//                             : "border-gray-300"
//                         }`}
//                       >
//                         {plan.icon}
//                         <h2 className="text-lg font-bold mt-4">{plan.name}</h2>
//                         <p className="text-gray-500">
//                           {billing === "monthly"
//                             ? `$${plan.monthlyPrice} / mo`
//                             : `$${plan.yearlyPrice} / yr`}
//                         </p>
//                         {billing === "yearly" && (
//                           <p className="text-2sm font-[500] text-blue-950 text-center">
//                             2 months free
//                           </p>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                   <div className="flex items-center">
//                     <span className="mr-2">Monthly</span>
//                     <div
//                       onClick={handleBillingToggle}
//                       className="relative w-16 h-8 bg-[#02295a] rounded-full shadow-inner cursor-pointer"
//                     >
//                       <div
//                         className={`absolute top-0 bottom-0 m-auto w-7 h-7 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
//                           billing === "yearly" ? "translate-x-[100%]" : ""
//                         }`}
//                       ></div>
//                     </div>
//                     <span className="ml-2">Yearly</span>
//                   </div>
//                 </div>
//               )}
//               {step === 3 && (
//                 // Your step 3 code remains unchanged
//               )}
//               {step === 4 && (
//                 <div>
//                   <h2 className="text-xl font-bold text-blue-900">Finishing up</h2>
//                   <p className="text-gray-500 mb-4">
//                     Double-check everything looks OK before confirming
//                   </p>
//                   <div className="border-b border-gray-300 pb-4 mb-4">
//                     <div className="flex justify-between mb-2">
//                       <p className="text-lg font-bold">{selectedPlan.name}</p>
//                       <p className="text-lg font-bold">
//                         {billing === "monthly"
//                           ? `$${selectedPlan.monthlyPrice} / mo`
//                           : `$${selectedPlan.yearlyPrice} / yr`}
//                       </p>
//                     </div>
//                     {/* Add other details for selectedAddOns if necessary */}
//                   </div>
//                 </div>
//               )}
//             </Grid>
//           </Grid>
//         </div>
//       </Container>
//     </div>
//   );
// }
