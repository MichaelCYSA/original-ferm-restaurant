import React, { ReactNode, createContext, useContext } from "react";
import { useCart, IUseCartReturn } from "@/hooks/useCart";

const noopFn = () => {};

const CartContext = createContext<IUseCartReturn>({
  addToCart: noopFn,
  removeFromCart: noopFn,
  minusProduct: noopFn,
  cart: [],
  totalPrice: 0,
  clearCart: noopFn,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const cart = useCart();

  return (
    <CartContext.Provider value={{ ...cart }}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
