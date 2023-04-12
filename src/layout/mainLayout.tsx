import Box from "@mui/material/Box";

import Footer from "./footer";
import Header from "./header";
import Container from "./components/container";

const MainLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <Box width={1}>
      <Header />
      <Container>
        <main style={{ minHeight: "600px" }}>{children}</main>
      </Container>
      <Footer />
    </Box>
  );
};

export default MainLayout;
