import Menu from "@/components/menu";
import ProductCard from "@/components/ProductCard";
import SectionDividerBox from "@/components/SectionDividerBox";
import Supplements from "@/components/supplements";
import {
  MenuSection,
  Product,
  products,
  translatedProducts,
} from "@/constants/products";
import { Box, Typography } from "@mui/material";
import ButtonScrollUp from "@/components/buttonScrollUp";
import { sectionBankets, seactionContacts } from "@/constants/sections";
import Image from "next/image";

import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const MainView = () => {
  return (
    <Box pt={"55px"}>
      <Menu />
      <Box display={"flex"} flexDirection={"column"} gap={10} mt={4}>
        {translatedProducts.map(
          (section: MenuSection, sectionIndex: number) => (
            <SectionDividerBox
              sectionName={section.sectionName}
              key={section.sectionName}
              id={section.id}
            >
              <Box
                display={"flex"}
                flexWrap={"wrap"}
                alignItems={"stretch"}
                gap={{
                  xs: "20px",
                  sm: "44px",
                  md: "80px",
                  lg: "44px",
                }}
              >
                {section.products?.map((product: Product, index) => {
                  return (
                    <Box
                      key={product.name + index}
                      width={{
                        xs: "calc((100% - 20px) / 2)",
                        sm: "calc((100% - 44px) / 2)",
                        md: "calc((100% - 160px) / 3)",
                        lg: "calc((100% - 132px) / 4)",
                      }}
                    >
                      <ProductCard item={product} />
                    </Box>
                  );
                })}
                {products.length - 1 === sectionIndex && (
                  <Box
                    width={{
                      xs: "100%",
                      sm: "100%",
                      md: "calc(((100% - 80px) / 3) * 2)",
                      lg: "calc(((100% - 88px) / 4) * 2)",
                    }}
                  >
                    <Supplements />
                  </Box>
                )}
              </Box>
            </SectionDividerBox>
          )
        )}
        <Bankets />
        <Contants />
      </Box>
      <ButtonScrollUp />
    </Box>
  );
};

export default MainView;

const Bankets = () => (
  <SectionDividerBox
    sectionName={sectionBankets.sectionName}
    key={sectionBankets.sectionName}
    id={sectionBankets.sectionId}
  >
    <Box display={"flex"} flexDirection={"column"}>
      <Box
        display={"flex"}
        gap={"45px"}
        flexDirection={{ xs: "column", md: "row" }}
      >
        <Box width={1} display={"flex"} flexDirection={"column"} gap={"30px"}>
          <Typography component={"p"} variant="h3">
            {sectionBankets.descriptionOne}
          </Typography>
          <Typography component={"p"} variant="h3">
            {sectionBankets.descriptionTwo}
          </Typography>
          <Typography component={"p"} variant="h3">
            {sectionBankets.descriptionThree}
          </Typography>
        </Box>
        <Box width={1}>
          <Image
            layout="responsive"
            width={520}
            height={288}
            src={sectionBankets.img}
            alt={sectionBankets.sectionName}
          />
        </Box>
      </Box>
    </Box>
  </SectionDividerBox>
);

const Contants = () => (
  <SectionDividerBox
    sectionName={seactionContacts.sectionName}
    key={seactionContacts.sectionName}
    id={seactionContacts.sectionId}
  >
    <Box display={"flex"} flexDirection={"column"}>
      <Box
        display={"flex"}
        gap={"45px"}
        flexDirection={{ xs: "column", md: "row" }}
      >
        <Box width={1}>
          <Image
            layout="responsive"
            width={520}
            height={288}
            src={seactionContacts.img}
            alt={seactionContacts.sectionName}
          />
        </Box>
        <Box width={1} display={"flex"} flexDirection={"column"} gap={"30px"}>
          <Box display={"flex"} gap={2} justifyContent={{xs: 'center', md: 'flex-end'}}>
            <FmdGoodOutlinedIcon sx={{ fontSize: "25px", color: "#9FCD57" }} />
            <Typography variant="h3">Calea Ieşilor 11/2, Chișinău</Typography>
          </Box>

          <Box display={"flex"} gap={2} justifyContent={{xs: 'center', md: 'flex-end'}}>
            <PhoneOutlinedIcon sx={{ fontSize: "25px", color: "#9FCD57" }} />
            <Typography
              component={"a"}
              sx={{ textDecoration: "none" }}
              href={"tel:373078323231"}
              variant="h3"
            >
              +3730783 23 231
            </Typography>
          </Box>

          <Box display={"flex"} gap={2} justifyContent={{xs: 'center', md: 'flex-end'}}>
            <QueryBuilderOutlinedIcon
              sx={{ fontSize: "25px", color: "#9FCD57" }}
            />
            <Typography variant="h3">Lucram 10-22:00</Typography>
          </Box>

          <Box display={"flex"} gap={2} justifyContent={{xs: 'center', md: 'flex-end'}}>
            <FacebookIcon sx={{ fontSize: "25px", color: "#9FCD57" }} />
            <a
              target="_blank"
              href="https://www.instagram.com/restaurant.fermacuorigini/#"
            >
              <InstagramIcon sx={{ fontSize: "25px", color: "#9FCD57" }} />
            </a>
            <Typography
              component={"a"}
              target="_blank"
              href="https://www.instagram.com/restaurant.fermacuorigini/#"
              sx={{ fontSize: "16px" }}
              variant="link"
            >
              restaurant.fermacuorigini
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  </SectionDividerBox>
);
