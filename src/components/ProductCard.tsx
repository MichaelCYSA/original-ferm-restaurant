import { Product } from '@/constants/products';
import { Translated } from '@/lang/languageContext';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/legacy/image';

const ProductCard = ({ item }: { item: Product }) => {
  return (
    <Box
      width={1}
      padding={'20px'}
      borderRadius={'10px'}
      display={"flex"}
      border={"1.5px solid #9FCD57"}
      justifyContent={"center"}
      minHeight={'100%'}
    >
      <Box
        width={1}
        maxWidth={"250px"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Image
          src={`/product-photos/${item.img}`}
          alt="salat"
          width={200}
          height={200}
          layout="responsive"
        />
        <Typography
          component={'span'}
          mt={1}
          variant="h3"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            lineClamp: 2,
            height: 46,
            boxOrient: 'vertical'
          }}>
          {
            Translated(item.name)
          }
        </Typography>
        <Box sx={{ height: 46 }}>
          <Typography mb={1} variant="h4">
            {
              Translated(item.description)
            }
          </Typography>
        </Box>
        <Typography variant="h3" mt={"34px"}>
          {item.price} MDL
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
    </Box >
  );
};

export default ProductCard;
