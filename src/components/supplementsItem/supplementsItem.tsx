import AddIcon from "@mui/icons-material/Add";
import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { IProduct } from "@/constants/products";
import { useLangContext } from "@/lang/languageContext";
import { useCartContext } from "@/contexts/cartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  useDeleteProductMutation,
  useUpdateProductMutation,
} from "@/store/api/product";
import { toast } from "react-toastify";
import { useTranslated } from "@/lang/languageContext";
import BlockIcon from "@mui/icons-material/Block";
import TurnRightIcon from "@mui/icons-material/TurnRight";

const SupplementsItem = ({
  item,
  isAuth,
  handleEdit,
}: {
  item: IProduct;
  isAuth?: boolean;
  handleEdit?: (item: IProduct) => () => void;
}) => {
  const { lang } = useLangContext();
  const theme = useTheme();
  const { addToCart } = useCartContext();
  const t = useTranslated();

  const [deleteProduct, { isLoading }] = useDeleteProductMutation();
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();

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
      display={"flex"}
      alignItems={"center"}
      gap={"4px"}
      flexDirection={{ xs: isAuth ? "column" : "row", md: "row" }}
    >
      <Typography variant="h3">
        {(item.name as any)?.[lang || "ro"]} - {item.price} mdl
      </Typography>
      {!isAuth ? (
        <IconButton
          disabled={Boolean(item.disabled)}
          onClick={() => addToCart(item)}
        >
          <AddIcon sx={{ color: theme.palette.customColor.main }} />
        </IconButton>
      ) : (
        <Box
          display={"flex"}
          sx={{ borderBottom: `1.5px solid ${theme.palette.customColor.main}` }}
          gap={2}
          width={1}
          justifyContent={"flex-end"}
          pb={1}
          mt={-2.75}
        >
          <IconButton
            size="small"
            disabled={isLoading || isUpdating}
            onClick={handleEdit && handleEdit(item)}
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
              <TurnRightIcon sx={{ color: 'white' }} />
            ) : (
              <BlockIcon sx={{ color: "red" }} />
            )}
          </IconButton>
          <IconButton
            size="small"
            disabled={isLoading || isUpdating}
            onClick={handleDelete(item._id)}
            sx={{
              background: theme.palette.customColor.main,
            }}
          >
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default SupplementsItem;
