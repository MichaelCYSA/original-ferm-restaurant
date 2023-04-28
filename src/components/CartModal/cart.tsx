import { Box, Typography, Button } from "@mui/material";
import CartItem from "./cartItem";
import { useCartContext } from "@/contexts/cartContext";
const Cart = () => {
  const { cart, addToCart, minusProduct, totalPrice } = useCartContext();
  return (
    <Box width={1} display={"flex"} flexDirection={"column"} gap={"20px"}>
      {cart.map((item, i) => (
        <CartItem
          plus={addToCart}
          minus={minusProduct}
          key={i + item.name}
          item={item}
        />
      ))}
      {!cart.length && (
        <Box width={1}>
          <Typography variant="h3">
            You don`t have selected pdoructs !
          </Typography>
        </Box>
      )}
      <Typography variant="h3">
        Total price: {totalPrice} MDL + Delivery 40 MDL = {totalPrice + 40} MDL
      </Typography>
      <Box>
        <Button variant="contained">Confirm order</Button>
      </Box>
    </Box>
  );
};

export default Cart;
