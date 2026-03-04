import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { IProduct } from "@/constants/products";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import GrainIcon from "@mui/icons-material/Grain";
import OpacityIcon from "@mui/icons-material/Opacity";
import { VoidFn } from "@/hooks/useCart";
import { useLangContext } from "@/lang/languageContext";

interface ICartItem {
  item: IProduct;
  plus: VoidFn<IProduct>;
  minus: VoidFn<IProduct>;
  redadOnly?: boolean;
}

const ProductIcon = ({
  type,
  color,
}: {
  type: string | undefined;
  color: string;
}) => {
  if (type === "toppings") {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: { xs: 56, sm: 70 },
          height: { xs: 56, sm: 70 },
          borderRadius: "10px",
          flexShrink: 0,
          border: `1.5px dashed ${color}55`,
          bgcolor: `${color}12`,
        }}
      >
        <GrainIcon sx={{ fontSize: { xs: 26, sm: 32 }, color }} />
      </Box>
    );
  }
  if (type === "sauces") {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: { xs: 56, sm: 70 },
          height: { xs: 56, sm: 70 },
          borderRadius: "10px",
          flexShrink: 0,
          border: `1.5px dashed #e0555555`,
          bgcolor: "#e0555512",
        }}
      >
        <OpacityIcon sx={{ fontSize: { xs: 26, sm: 32 }, color: "#e05555" }} />
      </Box>
    );
  }
  return null;
};

const CartItem = ({ item, minus, plus, redadOnly }: ICartItem) => {
  const theme = useTheme();
  const { lang } = useLangContext();
  const accent = theme.palette.customColor.main;

  const hasImage =
    item.productType !== "toppings" &&
    item.productType !== "sauces" &&
    item.image;

  const itemPrice = item.price ? item.price * (item.count ?? 1) : null;

  return (
    <Box
      width={1}
      display="flex"
      alignItems="center"
      gap={{ xs: 1, sm: 1.5 }}
      p={{ xs: 1, sm: 1.25 }}
      sx={{
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.08)",
        bgcolor: "rgba(255,255,255,0.04)",
        transition: "border-color 0.2s",
        "&:hover": { borderColor: `${accent}66` },
      }}
    >
      {/* Image / Icon */}
      <Box flexShrink={0}>
        {hasImage ? (
          <Box
            sx={{
              width: { xs: 56, sm: 70 },
              height: { xs: 56, sm: 70 },
              borderRadius: "10px",
              overflow: "hidden",
              bgcolor: "#111",
            }}
          >
            <Image
              width={70}
              height={70}
              src={
                item.image?.includes("http")
                  ? item.image
                  : `/webp/${item.image}`
              }
              alt={item.name?.ro ?? ""}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </Box>
        ) : (
          <ProductIcon type={item.productType} color={accent} />
        )}
      </Box>

      {/* Info */}
      <Box flex={1} minWidth={0}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: { xs: "0.82rem", sm: "0.92rem" },
            color: "#fff",
            lineHeight: 1.3,
            mb: 0.3,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {(item.name as any)?.[lang]}
        </Typography>

        {item.description && (
          <Typography
            component="p"
            sx={{
              fontSize: { xs: "0.7rem", sm: "0.76rem" },
              color: "rgba(255,255,255,0.45)",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              mb: 0.4,
            }}
          >
            {(item.description as any)?.[lang]}
          </Typography>
        )}

        {itemPrice !== null && (
          <Typography
            sx={{
              fontSize: { xs: "0.78rem", sm: "0.84rem" },
              fontWeight: 700,
              color: accent,
            }}
          >
            {itemPrice} MDL
          </Typography>
        )}
      </Box>

      {/* Counter */}
      <Box
        display="flex"
        alignItems="center"
        gap={{ xs: 0.5, sm: 0.75 }}
        flexShrink={0}
        sx={{
          bgcolor: "rgba(255,255,255,0.06)",
          borderRadius: "10px",
          p: { xs: "3px 5px", sm: "4px 8px" },
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <IconButton
          size="small"
          onClick={() => minus(item)}
          disabled={redadOnly}
          sx={{
            width: { xs: 24, sm: 28 },
            height: { xs: 24, sm: 28 },
            bgcolor: "rgba(255,255,255,0.08)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.15)" },
            "&:disabled": { opacity: 0.3 },
          }}
        >
          <RemoveIcon sx={{ fontSize: { xs: 14, sm: 16 }, color: "#fff" }} />
        </IconButton>

        <Typography
          sx={{
            width: { xs: 22, sm: 28 },
            textAlign: "center",
            fontWeight: 700,
            fontSize: { xs: "0.88rem", sm: "0.95rem" },
            color: "#fff",
          }}
        >
          {item.count}
        </Typography>

        <IconButton
          size="small"
          disabled={Number(item.count) > 20 || redadOnly}
          onClick={() => plus(item)}
          sx={{
            width: { xs: 24, sm: 28 },
            height: { xs: 24, sm: 28 },
            bgcolor: accent,
            "&:hover": { filter: "brightness(1.15)" },
            "&:disabled": { opacity: 0.35 },
          }}
        >
          <AddIcon sx={{ fontSize: { xs: 14, sm: 16 }, color: "#fff" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CartItem;
