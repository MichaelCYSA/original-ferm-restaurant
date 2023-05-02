import { IProduct } from "@/constants/products";
import { useGetProductsQuery } from "@/store/api/product";
import { Box, CircularProgress, useTheme } from "@mui/material";

import ProductCard from "../ProductCard";
import ProductCreateEditModal from "../ProductCreateEditModal/ProductCreateEditModal";
import { useState } from "react";

const ProductsSection = ({
  section,
  id,
  isAuth,
}: {
  section: string;
  id: string;
  isAuth?: boolean;
}) => {
  const [editData, setEditData] = useState<IProduct | undefined>();
  const {
    data,
    isLoading = true,
    refetch,
  } = useGetProductsQuery({ type: section });

  const theme = useTheme();

  const handleEdit = (item: IProduct) => () => setEditData(item);
  const handleClose = () => setEditData(undefined);

  if (isLoading) {
    return (
      <Box
        width={1}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        minHeight={"250px"}
      >
        <CircularProgress sx={{ color: theme.palette.customColor.main }} />
      </Box>
    );
  }

  return (
    <>
      {data?.data?.map((product: IProduct, index: number) => {
        return (
          <Box
            key={product._id}
            width={{
              xs: "calc((100% - 20px) / 2)",
              sm: "calc((100% - 44px) / 2)",
              md: "calc((100% - 160px) / 3)",
              lg: "calc((100% - 132px) / 4)",
            }}
          >
            <ProductCard
              isAuth={isAuth}
              item={product}
              handleEdit={handleEdit}
            />
          </Box>
        );
      })}
      <ProductCreateEditModal
        handleClose={handleClose}
        open={Boolean(editData)}
        data={editData}
      />
    </>
  );
};

export default ProductsSection;
