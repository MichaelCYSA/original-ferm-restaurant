import { menuLinks } from "@/constants/links";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Translated } from "@/lang/languageContext";
import { scrollToElementById } from "@/utils/scrollToElementById";

const Menu = () => {
  const [activeLink, setActiveLink] = useState("");

  const scrollToDiv = (id: string) => () => {
    scrollToElementById(id);
    setActiveLink(id);
  };

  return (
    <Box display={"flex"} flexDirection={"column"} gap={3} id={"menu"}>
      <Typography variant="h1" sx={{ color: "#9FCD57" }}>
        Menu
      </Typography>
      <Box display={"flex"} gap={"16px"} flexWrap={"wrap"}>
        {menuLinks.map((link, index) => (
          <Typography
            onClick={scrollToDiv(link.link)}
            key={`${link.link}-${index}`}
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              color: activeLink === link.link ? "#9FCD57" : "white",
            }}
            variant="link"
          >
            {Translated(link.name)}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Menu;
