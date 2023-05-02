import { useCartContext } from "@/contexts/cartContext";
import { Translated, useLangContext } from "@/lang/languageContext";
import { Box, Button, Typography, IconButton, useTheme } from "@mui/material";
import Image from "next/legacy/image";
import { IProduct } from "@/constants/products";
import EditIcon from "@mui/icons-material/Edit";
import { useDeleteProductMutation } from "@/store/api/product";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTranslated } from "@/lang/languageContext";
import { toast } from "react-toastify";

const ProductCard = ({
  item,
  isAuth,
  handleEdit = (item: IProduct) => () => {},
}: {
  item: IProduct;
  isAuth?: boolean;
  handleEdit?: (item: IProduct) => () => void;
}) => {
  const { addToCart } = useCartContext();
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();
  const theme = useTheme();

  const { lang } = useLangContext();
  const t = useTranslated();

  const handleAddProducts = () => addToCart(item);

  const handleDelete = (id?: string) => () => {
    deleteProduct({ id }).then((res: any) => {
      if (res.error) {
        return toast.error(t("ocurred_an_error_try_again"));
      }
    });
  };

  return (
    <Box
      width={1}
      padding={"20px"}
      borderRadius={"10px"}
      display={"flex"}
      border={"1.5px solid #9FCD57"}
      justifyContent={"center"}
      minHeight={"100%"}
    >
      <Box
        width={1}
        maxWidth={"250px"}
        display={"flex"}
        flexDirection={"column"}
        position={"relative"}
      >
        {isAuth && (
          <Box
            display={"flex"}
            gap={1}
            sx={{ position: "absolute", right: "0px", top: "0px", zIndex: 1 }}
          >
            <IconButton
              disabled={isLoading}
              onClick={handleEdit(item)}
              sx={{
                background: theme.palette.customColor.main,
              }}
            >
              <EditIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton
              disabled={isLoading}
              onClick={handleDelete(item._id)}
              sx={{
                background: theme.palette.customColor.main,
              }}
            >
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
          </Box>
        )}
        <Image
          src={`/product-photos/${item.image}`}
          alt="salat"
          width={200}
          height={200}
          layout="responsive"
        />
        <Typography
          component={"span"}
          mt={1}
          variant="h3"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineClamp: 2,
            height: 46,
            boxOrient: "vertical",
          }}
        >
          {(item.name as any)?.[lang]}
        </Typography>
        <Box sx={{ height: 46 }}>
          <Typography mb={1} variant="h4">
            {(item.description as any)?.[lang]}
          </Typography>
        </Box>
        <Typography variant="h3" mt={"34px"}>
          {item.price} MDL
        </Typography>
        {!isAuth && (
          <Box display={"flex"} gap={"21px"} mt={2} alignItems={"center"}>
            <Button
              onClick={handleAddProducts}
              variant="contained"
              sx={{ width: "153px", height: 42 }}
            >
              {Translated("order")}
            </Button>
            <Image
              src={"/shopping_cart.png"}
              width={30}
              height={30}
              alt="shopping-cart"
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ProductCard;
