"use client";

import { Container, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./showData";
import { add, removeOne, removeItem, total } from "./slice";

export default function GroceryApp() {
  const [grocery, setGrocery] = useState([]);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.products.items);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://fakestoreapi.in/api/products";

      try {
        const response = await fetch(url);
        const data = await response.json();
        setGrocery(data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleAdd = (product) => {
    const itemInCart = cartItems.find((item) => item.id === product.id);

    if (itemInCart) {
      product = { ...product, quantity: itemInCart.quantity + 1 };
    } else {
      product = { ...product, quantity: 1 };
    }
    console.log(product);

    dispatch(add(product));
    dispatch(total());
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

  return (
    <div className="bg-[#fffcf4]">
      <Container maxWidth="xl">
        <Grid container className="grocery-app py-10" spacing={2}>
          <Grid item sm={12} md={8}>
            <h1 className="text-[35px] p-5 font-[500]">Grocery Items</h1>

            <Grid container className="grocery-list" spacing={6}>
              {grocery &&
                grocery.length > 0 &&
                grocery.map((item) => (
                  <Grid item key={item.id} xs={12} sm={6} md={4}>
                    <div className="w-full rounded-lg  overflow-hidden ">
                      <img
                        className={`w-full aspect-square rounded-lg object-cover  z-[-1] ${
                          cartItems.find((cartItem) => cartItem.id === item.id)
                            ?.quantity >= 1
                            ? "border-[2px] border-[#d03c0c]"
                            : ""
                        }`}
                        src={item.image}
                        alt={item.name}
                      />

                      <div className="py-4 flex flex-col -mt-10 z-10">
                        <div className="flex justify-center items-center mb-2">
                          {cartItems.some(
                            (cartItem) => cartItem.id === item.id
                          ) ? (
                            <div className="flex justify-between items-center  gap-10 rounded-full font-semibold   bg-[#d03c0c]  py-2 px-2  ">
                              <button
                                onClick={() => handleRemoveOne(item)}
                                className="flex items-center justify-center w-6 h-6  rounded-full  border-[2px] border-white text-white font-[900] "
                              >
                                -
                              </button>
                              <span className="font-semibold  text-white">
                                {cartItems.find(
                                  (cartItem) => cartItem.id === item.id
                                )?.quantity || 1}
                              </span>
                              <button
                                onClick={() => handleAdd(item)}
                                className="flex items-center justify-center w-6 h-6 bg-white text-red-400 rounded-full    font-[900] "
                              >
                                +
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => handleAdd(item)}
                              className="flex items-center justify-center bg-white   py-2 px-4 rounded-full border-[2px] border-orange-600 font-semibold"
                            >
                              <span className="mr-2    text-orange-600">
                                🛒
                              </span>
                              Add to Cart
                            </button>
                          )}
                        </div>
                        <div className="font-[500] line-clamp-1 text-2sm">
                          {item.title}
                        </div>
                        <div className="text-[#d03c0c] font-semibold">
                          ${item.price.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </Grid>
                ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Cart />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
