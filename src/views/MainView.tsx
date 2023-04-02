import Menu from '@/components/menu';
import ProductCard from '@/components/ProductCard';
import SectionDividerBox from '@/components/SectionDividerBox';
import Supplements from '@/components/supplements';
import { MenuSection, Product, products } from '@/constants/products';
import { Box } from '@mui/material';


const MainView = () => {
  return (
    <Box pt={'55px'}>
      <Menu />
      <Box display={"flex"} flexDirection={"column"} gap={10} mt={4} >
        {products.map((section: MenuSection, sectionIndex: number) => (
          <SectionDividerBox
            sectionName={section.sectionName}
            key={section.sectionName}
            id={section.id}
          >
            <Box
              display={'flex'}
              flexWrap={'wrap'}
              alignItems={'stretch'}
              gap={{
                xs: '20px',
                sm: '44px',
                md: '80px',
                lg: '44px'
              }}>
              {section.products?.map((product: Product, index) => {
                return (
                  <Box
                    key={product.name + index}
                    width={{
                      xs: 'calc((100% - 20px) / 2)',
                      sm: 'calc((100% - 44px) / 2)',
                      md: 'calc((100% - 160px) / 3)',
                      lg: 'calc((100% - 132px) / 4)'
                    }} >
                    <ProductCard item={product} />
                  </Box>
                );
              })}
              {
                (products.length - 1 === sectionIndex) &&
                <Box
                  width={{
                    xs: '100%',
                    sm: '100%',
                    md: 'calc(((100% - 80px) / 3) * 2)',
                    lg: 'calc(((100% - 88px) / 4) * 2)'
                  }}
                >
                  <Supplements />
                </Box>
              }
            </Box>
          </SectionDividerBox>
        ))}
      </Box>
    </Box>
  );
};

export default MainView;



/*import Menu from '@/components/menu';
import ProductCard from '@/components/ProductCard';
import SectionDividerBox from '@/components/SectionDividerBox';
import Supplements from '@/components/supplements';
import { MenuSection, Product, products } from '@/constants/products';
import { Box, Grid } from '@mui/material';

const MainView = () => {
  return (
    <Box pt={'55px'}>
      <Menu />
      <Box display={"flex"} flexDirection={"column"} gap={10} mt={4} >
        {products.map((section: MenuSection, sectionIndex: number) => (
          <SectionDividerBox
            sectionName={section.sectionName}
            key={section.sectionName}
            id={section.id}
          >
            <Grid
              alignItems="flex-start"
              container
              spacing={{
                xs: '20px',
                sm: '44px',
                md: '80px',
                lg: '44px'
              }}>
              {section.products?.map((product: Product, index) => {
                return (
                  <Grid item key={product.name + index} xs={6} md={4} lg={3}>
                    <ProductCard item={product} />
                  </Grid>
                );
              })}
              {
                (products.length - 1 === sectionIndex) &&
                <Grid item xs={12} md={12} lg={6}>
                  <Supplements />
                </Grid>
              }
            </Grid>
          </SectionDividerBox>
        ))}
      </Box>
    </Box>
  );
};

export default MainView;
*/