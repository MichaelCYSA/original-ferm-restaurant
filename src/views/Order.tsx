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
      <Box width={1} mt={20} display={"flex"} justifyContent={"center"}>
        <Box display={"flex"} flexDirection={"column"} gap={6}>
          <Typography variant="h3">
            {Translated("your_cart_is_empty")}
          </Typography>
          <Box m={'0 auto'}>
            <Button onClick={handleMainPage}>
              {Translated("return_to_main")}
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }

  return <OrderForm />;
};

export default Order;
