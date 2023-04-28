import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useCartContext } from "@/contexts/cartContext";
import CartModal from "@/components/CartModal/CartModal";
import { useState } from "react";

const Cart = () => {
  const { cart } = useCartContext();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)

  return (
    <>
    <Box sx={{ position: "relative" }} onClick={handleOpen}>
      <Image src={"/icon-cart.png"} width={24} height={24} alt={"cart"} />
      <Box
        sx={{
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          background: "white",
          position: "absolute",
          top: "14px",
          left: "12px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          component={"span"}
          sx={{
            color: "#9FCD57",
            fontSize: "16px",
            textAlign: "center",
            width: "100%",
          }}
        >
          {cart?.length}
        </Typography>
      </Box>
    </Box>
    <CartModal handleClose={handleClose} open={open} />
    </>
  );
};

export default Cart;
