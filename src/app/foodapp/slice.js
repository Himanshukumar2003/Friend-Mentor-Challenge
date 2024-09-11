const { createSlice } = require("@reduxjs/toolkit");

export const AppSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    totalPrice: 0,
    productsItems: false,
  },
  reducers: {
    add(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      total();
    },

    removeOne(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0 && state.items[itemIndex].quantity > 1) {
        state.items[itemIndex].quantity -= 1;
      } else {
        removeItem();
      }

      total();
    },

    removeItem(state, action) {
      console.log({ state, action });
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      total();
    },

    total(state, action) {
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    open(state) {
      state.productsItems = true;
    },

    reset(state, action) {
      if (state.items.length >= 1) {
        state.items = [];
        state.items.total = [];
        state.totalPrice = 0;
        state.productsItems = false;
      }
    },
  },
});

export const { add, removeOne, removeItem, open, total, reset } =
  AppSlice.actions;
export default AppSlice.reducer;
