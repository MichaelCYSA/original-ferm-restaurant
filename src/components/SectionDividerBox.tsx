import { Box, Divider, Typography } from '@mui/material';
import { Translated } from '@/lang/languageContext';

const SectionDividerBox = ({
  sectionName,
  children,
  id
}: {
  sectionName: string;
  children: JSX.Element;
  id: string
}) => {
  return (
    <Box id={id} display={"flex"} flexDirection={"column"} gap={{ xs: 4, md: 8 }}>
      <Box
        display="flex"
        gap={"20px"}
        flexDirection={{
          xs: 'column',
          md: 'row'
        }}
      >
        <Typography variant="h1" sx={{ flexGrow: 0 }}>
          {Translated(sectionName)}
        </Typography>
        <Divider
          flexItem
          sx={{
            flexGrow: 1,
            background: "white",
            height: "3px",
            mt: { xs: 0, md: 2.5 }
          }}
        />
      </Box>
      {children}
    </Box>
  );
};

export default SectionDividerBox;
