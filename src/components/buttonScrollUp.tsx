import { Box } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ButtonScrollUp = () => {
   
  const handleSroll = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  

  return (
    <Box
      onClick={handleSroll}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      position={"fixed"}
      bottom={"50px"}
      right={"50px"}
      width={"50px"}
      height={"50px"}
      sx={{
        background: "#9FCD57",
        borderRadius: "100%",
        cursor: 'pointer'
      }}
    >
      <ArrowUpwardIcon sx={{ color: "white", fontSize: "40px" }} />
    </Box>
  );
};

export default ButtonScrollUp;
