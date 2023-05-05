import { headerLinks } from "@/constants/links";
import { Typography } from "@mui/material";

import style from "./burger.module.css";
import { scrollToElementById } from "@/utils/scrollToElementById";
import { useState } from "react";
import { Translated } from "@/lang/languageContext";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (id: string) => () => scrollToElementById(id);

  return (
    <div className={style.menuToggle} onClick={() => setOpen((prev) => !prev)}>
      <input type="checkbox" checked={open} />
      <span></span>
      <span></span>
      <span></span>
      <ul className={style.menu}>
        {headerLinks.map((link, index) => (
          <a onClick={handleScroll(link.link)} key={`${link.name}-${index}`}>
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontSize: "40px",
                "&:hover": { color: "#9FCD57" },
              }}
            >
              {Translated(link.name)}
            </Typography>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default BurgerMenu;
