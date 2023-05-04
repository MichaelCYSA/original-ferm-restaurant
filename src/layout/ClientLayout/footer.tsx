import { headerLinks } from "@/constants/links";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import LayuotContainer from "../../components/Containers/LayuotContainer";
import { Translated } from "@/lang/languageContext";
import { scrollToElementById } from "@/utils/scrollToElementById";
import { useRouter } from "next/router";
import { useLangContext } from "@/lang/languageContext";

const Footer = () => {
  const router = useRouter();
  const handleScroll = (id: string) => () => {
    if (router.pathname != "/") {
      router.push("/");
    }
    scrollToElementById(id);
  };
  const { handleSelectLanguage, lang } = useLangContext();
  const theme = useTheme();
  return (
    <Box
      sx={{ background: "#151515" }}
      component={"footer"}
      display={"flex"}
      justifyContent={"center"}
      mt={10}
      minWidth={"475px"}
    >
      <LayuotContainer>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={{ xs: "column", md: "row" }}
          pb={8}
          pt={8}
        >
          <Box display={"flex"} flexDirection={"column"} gap={"18px"}>
            <Box display={"flex"} gap={8}>
              <Box display={"flex"} flexDirection={"column"} gap={"12px"}>
                <Typography
                  onClick={handleScroll(headerLinks[0].link)}
                  variant="link"
                >
                  {Translated(headerLinks[0].name)}
                </Typography>
                <Typography
                  onClick={handleScroll(headerLinks[1].link)}
                  variant="link"
                >
                  {Translated(headerLinks[1].name)}
                </Typography>
              </Box>
              <Box display={"flex"} flexDirection={"column"} gap={"12px"}>
                <Typography
                  onClick={handleScroll(headerLinks[3].link)}
                  variant="link"
                >
                  {Translated(headerLinks[3].name)}
                </Typography>
                <Typography
                  onClick={handleScroll(headerLinks[2].link)}
                  variant="link"
                >
                  {Translated(headerLinks[2].name)}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Image
                src={"/logo.png"}
                width={359}
                height={64}
                alt={"Ferma cu origin"}
              />
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"18px"}>
            <Box display={"flex"} gap={"20px"}>
              <Typography
                sx={{
                  color:
                    lang === "ru" ? theme.palette.customColor.main : "white",
                  cursor: "pointer",
                }}
                onClick={() => handleSelectLanguage("ru")}
                variant="h3"
              >
                Ru
              </Typography>
              <Typography
                sx={{
                  color:
                    lang === "ro" ? theme.palette.customColor.main : "white",
                  cursor: "pointer",
                }}
                onClick={() => handleSelectLanguage("ro")}
                variant="h3"
              >
                Ro
              </Typography>
            </Box>
            <Typography variant="h3">Calea Ieşilor 11/2, Chișinău</Typography>
            <Typography variant="h3">
              {Translated("working")} 10-22:00, Tel.:{" "}
              <a style={{ color: "white" }} href={"tel:+37378323231"}>
                0783 23 231
              </a>
            </Typography>
            <Box display={"flex"} gap={2} alignItems={"flex-end"}>
              <Image
                src={"/facebook.png"}
                width={20}
                height={20}
                alt={"facebook"}
              />
              <Image
                src={"/instagram.png"}
                width={20}
                height={20}
                alt={"instagram"}
              />
              <a
                href="https://www.instagram.com/restaurant.fermacuorigini/#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", textDecoration: "underline" }}
              >
                <Typography variant="link" sx={{ fontSize: "16px" }}>
                  restaurant.fermacuorigini
                </Typography>
              </a>
            </Box>
          </Box>
        </Box>
      </LayuotContainer>
    </Box>
  );
};

export default Footer;
