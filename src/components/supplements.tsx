import { Box, Typography } from "@mui/material";
import { useGetProductsQuery } from "@/store/api/product";
import { IProduct } from "@/constants/products";
import SupplementsItem from "./supplementsItem/supplementsItem";
import { Translated } from "@/lang/languageContext";
import ProductCreateEditModal from "./ProductCreateEditModal/ProductCreateEditModal";
import { useState } from "react";

const Supplements = ({ isAuth }: { isAuth?: boolean }) => {
  const [editData, setEditData] = useState<IProduct | undefined>();

  const { data: topptings, isLoading: toppingsLoading = true } =
    useGetProductsQuery({ type: "toppings" });
  const { data: souces, isLoading: soucesLoading = true } = useGetProductsQuery(
    { type: "souces" }
  );

  const handleClose = () => setEditData(undefined);
  const handleEdit = (item: IProduct) => () => setEditData(item);

  return (
    <Box
      borderRadius={"10px"}
      border={"1.5px solid #9FCD57"}
      display={"flex"}
      p={"20px"}
      gap={2}
      minHeight={"100%"}
      width={1}
    >
      <Box display={"flex"} flexDirection={"column"} gap={"12px"} width={1}>
        <Box>
          <Typography variant="h1">{Translated("souces")}</Typography>
          <Typography variant="h3">50 g</Typography>
        </Box>
        {souces?.data?.map((sauce: IProduct, index: number) => (
          <SupplementsItem
            handleEdit={handleEdit}
            isAuth={isAuth}
            key={`${sauce.name}-${index}`}
            item={sauce}
          />
        ))}
      </Box>
      <Box width={"2px"} sx={{ background: "#9FCD57" }} minHeight={"90%"}/>
      <Box display={"flex"} flexDirection={"column"} gap={"12px"} width={1}>
        <Box>
          <Typography variant="h1">{Translated("toppings")}</Typography>
          <Typography variant="h3">50 g</Typography>
        </Box>
        {topptings?.data?.map((topping: IProduct, index: number) => (
          <SupplementsItem
            handleEdit={handleEdit}
            isAuth={isAuth}
            key={`${topping._id}-${index}`}
            item={topping}
          />
        ))}
      </Box>
      <ProductCreateEditModal
        handleClose={handleClose}
        open={Boolean(editData)}
        data={editData}
      />
    </Box>
  );
};

export default Supplements;