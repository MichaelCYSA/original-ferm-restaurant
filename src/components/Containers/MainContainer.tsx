import { Box } from "@mui/material";
import { ReactNode } from "react";

const MainContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        width: 1,
        maxWidth: "1126px",
      }}
    >
      {children}
    </Box>
  );
};

export default MainContainer;
