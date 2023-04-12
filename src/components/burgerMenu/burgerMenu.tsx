import { headerLinks } from "@/constants/links";
import { Typography } from "@mui/material";

import style from "./burger.module.css";
import { scrollToElementById } from "@/utils/scrollToElementById";

const BurgerMenu = () => {
  const handleScroll = (id: string) => () => scrollToElementById(id);
  return (
    <div className={style.menuToggle}>
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul className={style.menu}>
        {headerLinks.map((link) => (
          <a onClick={handleScroll(link.link)} key={link.name}>
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontSize: "40px",
                "&:hover": { color: "#9FCD57" },
              }}
            >
              {link.name}
            </Typography>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default BurgerMenu;
