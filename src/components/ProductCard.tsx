import { IProduct } from "@/constants/products";
import { useCartContext } from "@/contexts/cartContext";
import {
  Translated,
  useLangContext,
  useTranslated,
} from "@/lang/languageContext";
import {
  useDeleteProductMutation,
  useUpdateProductMutation,
} from "@/store/api/product";
import BlockIcon from "@mui/icons-material/Block";
import EditIcon from "@mui/icons-material/Edit";
import TurnRightIcon from "@mui/icons-material/TurnRight";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Image from "next/legacy/image";
import { toast } from "react-toastify";

import DeleteModal from "./DeleteModal/DeleteModal";

const ProductCard = ({
  item,
  isAuth,
  handleEdit = (item: IProduct) => () => {},
  imgDisabled,
}: {
  item: IProduct;
  isAuth?: boolean;
  imgDisabled?: boolean;
  handleEdit?: (item: IProduct) => () => void;
}) => {
  const { addToCart } = useCartContext();
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();
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
  const handleUpdate =
    ({ id, disabled }: { id?: string; disabled: boolean }) =>
    () => {
      updateProduct({ id, data: { disabled } }).then((res: any) => {
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
            flexWrap={"wrap"}
          >
            <IconButton
              size="small"
              disabled={isLoading || isUpdating}
              onClick={handleEdit(item)}
              sx={{
                background: theme.palette.customColor.main,
              }}
            >
              <EditIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton
              size="small"
              disabled={isLoading || isUpdating}
              onClick={handleUpdate({ id: item._id, disabled: !item.disabled })}
              sx={{
                background: theme.palette.customColor.main,
              }}
            >
              {item.disabled ? (
                <TurnRightIcon sx={{ color: "white" }} />
              ) : (
                <BlockIcon sx={{ color: "red" }} />
              )}
            </IconButton>
            <DeleteModal
              isLoading={isLoading || isUpdating}
              deleteFn={handleDelete(item._id)}
            />
          </Box>
        )}
        {!imgDisabled ? (
          <Image
            src={`/webp/${item.image}`}
            alt="salat"
            width={200}
            height={200}
            layout="responsive"
          />
        ) : null}

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
        <Box
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "normal",
            height: 40,
          }}
        >
          <Typography mb={1} variant="h4">
            {(item.description as any)?.[lang]}
          </Typography>
        </Box>

        <Typography variant="h3" mt={"34px"}>
          {item.price} MDL
        </Typography>
        {/* {!isAuth && (
          <Box display={"flex"} gap={"21px"} mt={2} alignItems={"center"}>
            <Button
              onClick={handleAddProducts}
              variant="contained"
              disabled={Boolean(item.disabled)}
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
        )} */}
      </Box>
    </Box>
  );
};

export default ProductCard;
