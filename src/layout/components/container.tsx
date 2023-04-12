import { Box } from "@mui/material";

const Container = ({ children }: { children: JSX.Element }) => (
  <Box
    maxWidth={"1126px"}
    minWidth={"475px"}
    width={1}
    m={"0 auto"}
    pl={3}
    pr={3}
  >
    {children}
  </Box>
);

export default Container;
