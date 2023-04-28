import OrderForm from "@/components/orderForm/orderForm";
import { useCartContext } from "@/contexts/cartContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
const Order = () => {
  const { cart } = useCartContext();

  const router = useRouter();

  useEffect(() => {
    if (cart && !cart.length) {
      router.push("/");
    }
  }, [cart]);

  if (!cart.length) {
    return <></>;
  }
  
  return <OrderForm />;
};

export default Order;
