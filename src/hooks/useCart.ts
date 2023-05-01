import { Product } from "@/constants/products";
import { useState, useEffect, useCallback, useMemo } from "react";
import { getNewProductsArray } from "@/utils/getNewProductsArray";
import { saveToLocalStorage } from "@/utils/saveToLocalStorage";

const cartStorageName = "cart_items";

export type VoidFn<T> = (fn: T) => void;

export interface IUseCartReturn {
  addToCart: VoidFn<Product>;
  removeFromCart: VoidFn<string>;
  minusProduct: VoidFn<Product>;
  cart: Product[];
  totalPrice: number;
}

export const useCart = (): IUseCartReturn => {
  const [cart, setCart] = useState<Product[]>([]);
  const [updatedCart, setUpdatedCart] = useState(false);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const products = getNewProductsArray(prevCart, product);
      return products;
    });
    setUpdatedCart(true);
  };

  const removeFromCart = (id?: string) => {
    setCart((prevCart) => {
      const products = prevCart.filter((item) => item._id !== id);
      return products;
    });
    setUpdatedCart(true);
  };

  const memoizedGetNewProductsArray = useCallback(getNewProductsArray, []);

  const minusProduct = (product: Product) => {
    if (Number(product.count) < 2) {
      removeFromCart(product._id);
    } else {
      setCart((prevCart) => {
        const products = memoizedGetNewProductsArray(prevCart, product, true);
        return products;
      });
      setUpdatedCart(true);
    }
  };

  const totalPrice = useMemo(
    () =>
      cart.reduce((acc, item) => {
        return acc + Number(item.count) * item.price;
      }, 0),
    [cart]
  );

  useEffect(() => {
    const cartStorage = localStorage.getItem(cartStorageName);
    if (cartStorage) {
      const products = JSON.parse(cartStorage);
      setCart(products);
    }
  }, []);

  useEffect(() => {
    if (updatedCart) {
      setUpdatedCart(false);
      saveToLocalStorage(cartStorageName, JSON.stringify(cart));
    }
  }, [updatedCart, cart]);

  return {
    addToCart,
    removeFromCart,
    minusProduct,
    cart,
    totalPrice,
  };
};