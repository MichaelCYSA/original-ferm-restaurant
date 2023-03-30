import SectionDividerBox from "@/components/SectionDividerBox";
import { Box, Grid } from "@mui/material";
import { products, MenuSection, Product } from "@/constants/products";
import ProductCard from "@/components/ProductCard";

const MainView = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={10}>
      {products.map((section: MenuSection) => (
        <SectionDividerBox
          sectionName={section.sectionName}
          key={section.sectionName}
        >
          <Grid container spacing={2}>
            {section.products?.map((product: Product, index) => {
              return (
                <Grid item key={product.name + index} xs={6} md={4} lg={3}>
                  <ProductCard item={product} />
                </Grid>
              );
            })}
          </Grid>
        </SectionDividerBox>
      ))}
    </Box>
  );
};

export default MainView;
