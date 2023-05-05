import { Box, Typography, Button } from "@mui/material";
import CartItem from "./cartItem";
import { useCartContext } from "@/contexts/cartContext";
import { useRouter } from "next/router";
import { Translated } from "@/lang/languageContext";

const Cart = ({
  isForm,
  handleClose = () => {},
  redadOnly,
}: {
  isForm?: boolean;
  handleClose?: () => void;
  redadOnly?: boolean;
}) => {
  const { cart, addToCart, minusProduct, totalPrice } = useCartContext();
  const router = useRouter();
  const redirectToOrdering = () => {
    router.push("/order");
    handleClose();
  };
  return (
    <Box width={1} display={"flex"} flexDirection={"column"} gap={"20px"}>
      {cart.map((item) => (
        <CartItem
          plus={addToCart}
          minus={minusProduct}
          key={item._id}
          item={item}
          redadOnly={redadOnly}
        />
      ))}
      {!cart.length ? (
        <Box width={1} display={"flex"} justifyContent={"center"}>
          <Typography variant="h3" textAlign={"center"}>
            {Translated("you_don_t_have_selected_pdoructs")}
          </Typography>
        </Box>
      ) : (
        <></>
      )}
      {cart.length ? (
        <Typography variant="h3">
          {Translated("total_price")}: {totalPrice} MDL +{" "}
          {Translated("delivery")} 40 MDL = {totalPrice + 40}
          MDL
        </Typography>
      ) : (
        <></>
      )}
      {!isForm && cart.length ? (
        <Box>
          <Button onClick={redirectToOrdering} variant="contained">
            {Translated("order")}
          </Button>
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default Cart;
