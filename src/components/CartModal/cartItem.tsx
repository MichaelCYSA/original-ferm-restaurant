import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { Product } from "@/constants/products";
import Image from "next/image";
import { Translated } from "@/lang/languageContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { VoidFn } from "@/hooks/useCart";

interface ICartItem {
  item: Product;
  plus: VoidFn<Product>;
  minus: VoidFn<Product>;
}
const CartItem = ({ item, minus, plus }: ICartItem) => {
  const theme = useTheme();

  const handleMinus = () => minus(item);
  const handlePlus = () => plus(item);

  return (
    <Box
      width={1}
      border={`1.5px solid ${theme.palette.customColor.main}`}
      borderRadius={"5px"}
      display={"flex"}
      gap={1}
      height={"90px"}
      p={1}
    >
      <Image
        width={74}
        height={74}
        src={`/product-photos/${item.img}` || ""}
        alt={item.name}
      />
      <Box width={1}>
        <Typography variant="h3">{Translated(item.name)}</Typography>
        <Typography variant="h4" component={"p"}>
          {Translated(item.description)}
        </Typography>
      </Box>
      <Box
        width={"90px"}
        height={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <IconButton
          sx={{ width: "25px", height: "25px" }}
          onClick={handleMinus}
        >
          <RemoveIcon sx={{ color: theme.palette.customColor.main }} />
        </IconButton>
        <Typography sx={{ width: "30px" }} textAlign={"center"} variant="h4">
          {item.count}
        </Typography>
        <IconButton
          disabled={Number(item.count) > 20}
          sx={{ width: "25px", height: "25px" }}
          onClick={handlePlus}
        >
          <AddIcon sx={{ color: theme.palette.customColor.main }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CartItem;
