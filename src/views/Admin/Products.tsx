import { Box, Button } from "@mui/material";
import ProductsContainer from "@/components/Containers/ProductsContainer";
import { productCatagories } from "@/constants/products";
import ProductsSection from "@/components/ProductsSection/ProductsSection";
import ProductCreateEditModal from "@/components/ProductCreateEditModal/ProductCreateEditModal";
import { useState } from "react";
import Supplements from "@/components/supplements";

const Products = () => {
  return (
      <Box display={"flex"} flexDirection={"column"} width={1} gap={3}>
        <Box display={"flex"} justifyContent={"center"}>
          <CreateProudct />
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={4} mt={4}>
          {productCatagories.map((category: any, sectionIndex: number) => (
            <ProductsContainer
              containerName={category.value}
              key={`${category.value}-${sectionIndex}`}
              containerId={category.value}
            >
              <ProductsSection
                isAuth
                section={category.value}
                id={category.value}
              />
            </ProductsContainer>
          ))}
         <Supplements isAuth/>
        </Box>
      </Box> 
  );
};

export default Products;

const CreateProudct = () => {
  const [open, setOpen] = useState(false);
  const toggleMoal = () => setOpen((prev) => !prev);
  return (
    <>
      <Button onClick={toggleMoal} variant="contained">
        Create new Product
      </Button>
      <ProductCreateEditModal open={open} handleClose={toggleMoal} />
    </>
  );
};
