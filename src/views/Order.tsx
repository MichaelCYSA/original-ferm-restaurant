import OrderForm from "@/components/orderForm/orderForm";
import { useCartContext } from "@/contexts/cartContext";
import { useRouter } from "next/router";
import { Typography, Box, Button } from "@mui/material";
import { Translated } from "@/lang/languageContext";

const Order = () => {
  const { cart } = useCartContext();

  const router = useRouter();
  const handleMainPage = () => router.push("/");

  if (!cart.length) {
    return (
      <Box
        width={1}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        gap={6}
      >
        <Typography variant="h3">{Translated("your_cart_is_empty")}</Typography>
        <Button onClick={handleMainPage}>{Translated("return_to_main")}</Button>
      </Box>
    );
  }

  return <OrderForm />;
};

export default Order;
