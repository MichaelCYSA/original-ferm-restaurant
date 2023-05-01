import ButtonScrollUp from '@/components/buttonScrollUp';
import Menu from '@/components/menu';
import ProductsSection from '@/components/ProductsSection/ProductsSection';
import SectionDividerBox from '@/components/SectionDividerBox';
import Supplements from '@/components/supplements';
import { productCatagories, products } from '@/constants/products';
import { seactionContacts, sectionBankets } from '@/constants/sections';
import FacebookIcon from '@mui/icons-material/Facebook';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const MainView = () => {
  return (
    <Box pt={"55px"}>
      <Menu />
      <Box display={"flex"} flexDirection={"column"} gap={10} mt={4}>
        {productCatagories.map(
          (category: any, sectionIndex: number) => (
            <SectionDividerBox
              sectionName={category.value}
              key={category.value}
              id={category.value}
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
                <ProductsSection section={category.value} id={category.value} />
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
        <Banket />
        <Contacts />
      </Box>
      <ButtonScrollUp />
    </Box>
  );
};

export default MainView;

const Banket = () => (
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

const Contacts = () => (
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
          <Box display={"flex"} gap={2} justifyContent={{ xs: 'center', md: 'flex-end' }}>
            <FmdGoodOutlinedIcon sx={{ fontSize: "25px", color: "#9FCD57" }} />
            <Typography variant="h3">Calea Ieşilor 11/2, Chișinău</Typography>
          </Box>

          <Box display={"flex"} gap={2} justifyContent={{ xs: 'center', md: 'flex-end' }}>
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

          <Box display={"flex"} gap={2} justifyContent={{ xs: 'center', md: 'flex-end' }}>
            <QueryBuilderOutlinedIcon
              sx={{ fontSize: "25px", color: "#9FCD57" }}
            />
            <Typography variant="h3">Lucram 10-22:00</Typography>
          </Box>

          <Box display={"flex"} gap={2} justifyContent={{ xs: 'center', md: 'flex-end' }}>
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
