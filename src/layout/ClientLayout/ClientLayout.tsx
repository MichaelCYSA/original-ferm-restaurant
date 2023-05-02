import Box from "@mui/material/Box";

import Footer from "./footer";
import Header from "./header";
import LayuotContainer from "../../components/Containers/LayuotContainer";

const ClientLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <Box width={1}>
      <Header />
      <LayuotContainer>
        <main style={{ minHeight: "600px" }}>{children}</main>
      </LayuotContainer>
      <Footer />
    </Box>
  );
};

export default ClientLayout;
