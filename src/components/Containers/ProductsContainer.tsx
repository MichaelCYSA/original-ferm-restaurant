import { Box } from "@mui/material";
import SectionDividerBox from "../SectionDividerBox";

const ProductsContainer = ({
  children,
  containerId,
  containerName,
}: {
  children: JSX.Element;
  containerName: string;
  containerId: string;
}) => {
  return (
    <SectionDividerBox sectionName={containerName} id={containerId}>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        alignItems={"stretch"}
        gap={{
          xs: "20px",
          sm: "44px",
          md: "80px",
          lg: "44px",
        }}
      >
        {children}
      </Box>
    </SectionDividerBox>
  );
};

export default ProductsContainer;
