import { IProduct, drinkTypes } from "@/constants/products";
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
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
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

  const accent = theme.palette.customColor.main;
  const isDrink = drinkTypes.includes(item.productType);

  const handleAddProducts = () => addToCart(item);

  const handleDelete = (id?: string) => () => {
    deleteProduct({ id }).then((res: any) => {
      if (res.error) return toast.error(t("ocurred_an_error_try_again"));
    });
  };

  const handleUpdate =
    ({ id, disabled }: { id?: string; disabled: boolean }) =>
    () => {
      updateProduct({ id, data: { disabled } }).then((res: any) => {
        if (res.error) return toast.error(t("ocurred_an_error_try_again"));
      });
    };

  return (
    <Box
      width={1}
      height={1}
      display="flex"
      flexDirection="column"
      borderRadius="12px"
      overflow="hidden"
      sx={{
        border: `1.5px solid`,
        borderColor: isDrink ? "rgba(144,135,135,0.4)" : `${accent}55`,
        bgcolor: "rgba(255,255,255,0.03)",
        transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
        opacity: item.disabled ? 0.5 : 1,
        "&:hover": {
          borderColor: isDrink ? "rgba(144,135,135,0.7)" : accent,
          transform: "translateY(-2px)",
          boxShadow: `0 8px 24px rgba(0,0,0,0.35)`,
        },
        position: "relative",
      }}
    >
      {/* Admin controls */}
      {isAuth && (
        <Box
          display="flex"
          gap={0.5}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            zIndex: 2,
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          <IconButton
            size="small"
            disabled={isLoading || isUpdating}
            onClick={handleEdit(item)}
            sx={{
              bgcolor: accent,
              width: 30,
              height: 30,
              "&:hover": { bgcolor: accent, filter: "brightness(1.15)" },
            }}
          >
            <EditIcon sx={{ color: "#fff", fontSize: 16 }} />
          </IconButton>
          <IconButton
            size="small"
            disabled={isLoading || isUpdating}
            onClick={handleUpdate({ id: item._id, disabled: !item.disabled })}
            sx={{
              bgcolor: "rgba(255,255,255,0.08)",
              width: 30,
              height: 30,
              "&:hover": { bgcolor: "rgba(255,255,255,0.15)" },
            }}
          >
            {item.disabled ? (
              <TurnRightIcon sx={{ color: "#fff", fontSize: 16 }} />
            ) : (
              <BlockIcon sx={{ color: "#ff5555", fontSize: 16 }} />
            )}
          </IconButton>
          <DeleteModal
            isLoading={isLoading || isUpdating}
            deleteFn={handleDelete(item._id)}
          />
        </Box>
      )}

      {/* Image */}
      {!imgDisabled && (
        <Box
          sx={{
            width: "100%",
            aspectRatio: "1 / 1",
            overflow: "hidden",
            bgcolor: "rgba(0,0,0,0.2)",
          }}
        >
          <Image
            src={
              item.image && item.image?.includes("http")
                ? item.image
                : `/webp/${item.image}`
            }
            alt={item.name?.ro ?? "product"}
            width={200}
            height={200}
            layout="responsive"
            objectFit="cover"
          />
        </Box>
      )}

      {/* Content */}
      <Box
        display="flex"
        flexDirection="column"
        flex={1}
        p={{ xs: 1.25, sm: 1.5 }}
        gap={0.5}
      >
        <Typography
          component="span"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "0.82rem", sm: "0.9rem" },
            color: "#fff",
            lineHeight: 1.3,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
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
            minHeight: isDrink ? "auto" : "2.4em",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "0.72rem", sm: "0.78rem" },
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.4,
            }}
          >
            {(item.description as any)?.[lang]}
          </Typography>
        </Box>

        {/* Price */}
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: { xs: "0.95rem", sm: "1rem" },
            color: accent,
            mt: "auto",
            pt: 1,
          }}
        >
          {typeof item.price === "object"
            ? Object.values(item.price).join(" / ")
            : item.price}{" "}
          MDL
        </Typography>

        {/* Add to cart */}
        {!isAuth && (
          <Box display="flex" gap={1} alignItems="center" mt={0.75}>
            <Button
              onClick={handleAddProducts}
              variant="contained"
              disabled={Boolean(item.disabled)}
              fullWidth
              sx={{
                height: { xs: 36, sm: 40 },
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: { xs: "0.75rem", sm: "0.82rem" },
                textTransform: "none",
                color: "#fff",
                boxShadow: "none",
                "&:hover": {
                  filter: "brightness(1.1)",
                  boxShadow: `0 4px 14px ${accent}55`,
                },
                "&:disabled": { opacity: 0.35 },
                transition: "all 0.2s",
              }}
            >
              {Translated("order")}
            </Button>
            <IconButton
              onClick={handleAddProducts}
              disabled={Boolean(item.disabled)}
              size="small"
              sx={{
                flexShrink: 0,
                width: { xs: 36, sm: 40 },
                height: { xs: 36, sm: 40 },
                borderRadius: "8px",
                bgcolor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.12)" },
                "&:disabled": { opacity: 0.3 },
              }}
            >
              <ShoppingCartOutlinedIcon
                sx={{ fontSize: { xs: 18, sm: 20 }, color: "#fff" }}
              />
            </IconButton>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ProductCard;
