import BurgerMenu from "@/components/burgerMenu";
import { headerLinks } from "@/constants/links";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

import Cart from "./components/cart";
import LanguageSelect from "./components/languageSelect";
import { scrollToElementById } from "@/utils/scrollToElementById";
import LayuotContainer from "../../components/Containers/LayuotContainer";
import Link from "next/link";

const Header = () => {
  const handleScroll = (id: string) => () => scrollToElementById(id);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component={"header"}
      minWidth={"475px"}
      display={"flex"}
      justifyContent={"center"}
      height={"84px"}
      sx={{ background: "#151515" }}
    >
      <LayuotContainer>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          height={"84px"}
          alignItems={"center"}
        >
          <Box width={"40px"} display={{ md: "none" }}>
            <BurgerMenu />
          </Box>
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              width={240}
              height={42}
              alt={"Ferma cu Origin"}
            />
          </Link>
          {!isMobile && (
            <Box display={{ xs: "none", md: "flex" }} gap={3}>
              {headerLinks.map((item) => (
                <Typography
                  onClick={handleScroll(item.link)}
                  variant="link"
                  key={item.name}
                >
                  {item.name}
                </Typography>
              ))}
              <LanguageSelect />
              <Cart />
            </Box>
          )}
          <Box width={"40px"} display={{ xs: "flex", md: "none" }}>
            {isMobile && <Cart />}
          </Box>
        </Box>
      </LayuotContainer>
    </Box>
  );
};

export default Header;
