"use client";

import { Provider } from "react-redux";
import store from "./Store";
function MyProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default MyProvider;
