import { Box, Typography, Divider } from "@mui/material";

const SectionDividerBox = ({
  sectionName,
  children,
}: {
  sectionName: string;
  children: JSX.Element;
}) => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={8}>
      <Box display="flex" gap={"20px"}>
        <Typography variant="h1" sx={{ flexGrow: 0 }}>
          {sectionName}
        </Typography>
        <Divider
          flexItem
          sx={{ flexGrow: 1, background: "white", height: "3px", mt: 2.5 }}
        />
      </Box>
      {children}
    </Box>
  );
};

export default SectionDividerBox;
