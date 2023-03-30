import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { Product } from "@/constants/products";

const ProductCard = ({ item }: { item: Product }) => {
  return (
    <Box
      width={1}
      padding={3}
      borderRadius={1}
      display={"flex"}
      border={"1.5px solid #9FCD57"}
      justifyContent={"center"}
    >
      <Box
        width={1}
        maxWidth={"200px"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Image src={`/product-photos/${item.img}`} alt="salat" width={200} height={200} />
        <Typography mt={2} variant="h3">
          {item.name}
        </Typography>
        <Typography mt={1} variant="h4">
          {item.description}
        </Typography>
        <Typography variant="h3" mt={"34px"}>
          {item.price}
        </Typography>
        <Box display={"flex"} gap={"21px"} mt={2} alignItems={"center"}>
          <Button variant="contained" sx={{ width: "153px", height: 42 }}>
            Заказать
          </Button>
          <Image
            src={"/shopping_cart.png"}
            width={30}
            height={30}
            alt="shopping-cart"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
