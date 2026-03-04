import { Box, Typography, Button, Divider } from "@mui/material";
import CartItem from "./cartItem";
import { useCartContext } from "@/contexts/cartContext";
import { useRouter } from "next/router";
import { Translated } from "@/lang/languageContext";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

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

  if (!cart.length) {
    return (
      <Box
        width={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={2}
        py={6}
      >
        <Box
          sx={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            bgcolor: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ShoppingCartOutlinedIcon
            sx={{ fontSize: 34, color: "rgba(255,255,255,0.3)" }}
          />
        </Box>
        <Typography
          textAlign="center"
          sx={{
            color: "rgba(255,255,255,0.5)",
            fontSize: { xs: "0.9rem", sm: "1rem" },
          }}
        >
          {Translated("you_don_t_have_selected_pdoructs")}
        </Typography>
      </Box>
    );
  }

  const deliveryCost = 40;

  return (
    <Box width={1} display="flex" flexDirection="column" gap={1.5}>
      {/* Items */}
      <Box display="flex" flexDirection="column" gap={1}>
        {cart.map((item, index) => (
          <CartItem
            plus={addToCart}
            minus={minusProduct}
            key={`${item._id}-${index}`}
            item={item}
            redadOnly={redadOnly}
          />
        ))}
      </Box>

      {/* Price summary */}
      <Box
        mt={0.5}
        p={{ xs: 1.5, sm: 2 }}
        borderRadius="12px"
        sx={{
          bgcolor: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Box display="flex" justifyContent="space-between" mb={1}>
          <Typography
            sx={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.55)" }}
          >
            {Translated("total_price")}
          </Typography>
          <Typography
            sx={{ fontSize: "0.88rem", fontWeight: 600, color: "#fff" }}
          >
            {totalPrice} MDL
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" mb={1.5}>
          <Box display="flex" alignItems="center" gap={0.5}>
            <LocalShippingOutlinedIcon
              sx={{ fontSize: 15, color: "rgba(255,255,255,0.4)" }}
            />
            <Typography
              sx={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.55)" }}
            >
              {Translated("delivery")}
            </Typography>
          </Box>
          <Typography
            sx={{ fontSize: "0.88rem", fontWeight: 600, color: "#fff" }}
          >
            {deliveryCost} MDL
          </Typography>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mb: 1.5 }} />

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            sx={{ fontWeight: 700, fontSize: "0.95rem", color: "#fff" }}
          >
            Итого
          </Typography>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.05rem", sm: "1.15rem" },
              color: (theme) => theme.palette.customColor.main,
            }}
          >
            {totalPrice + deliveryCost} MDL
          </Typography>
        </Box>
      </Box>

      {/* Order button */}
      {!isForm && (
        <Button
          onClick={redirectToOrdering}
          variant="contained"
          fullWidth
          size="large"
          sx={{
            borderRadius: "12px",
            py: { xs: 1.25, sm: 1.5 },
            fontWeight: 700,
            fontSize: { xs: "0.95rem", sm: "1rem" },
            textTransform: "none",
            color: "#fff",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            "&:hover": {
              filter: "brightness(1.1)",
              boxShadow: "0 6px 24px rgba(0,0,0,0.5)",
              transform: "translateY(-1px)",
            },
            transition: "all 0.2s ease",
          }}
        >
          {Translated("order")}
        </Button>
      )}
    </Box>
  );
};

export default Cart;
