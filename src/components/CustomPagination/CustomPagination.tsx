import { Pagination, Box, useTheme } from "@mui/material";

interface ICustomPagination {
  pages: number;
  currentPage: number;
  onPageChange: (_: any, page: number) => void;
}

const CustomPagination = ({
  pages,
  currentPage,
  onPageChange,
}: ICustomPagination) => {

  const theme = useTheme();
  
  return (
    <Box mt={5} display={"flex"} justifyContent={"center"}>
      {pages && (
        <Pagination
          page={currentPage}
          count={pages}
          sx={{
            "& .Mui-selected": {
              background: theme.palette.customColor.main,
              color: "white",
              borderRadius: "50%",
              "&:hover": {
                background: "black",
                color: "white",
              },
            },
            "& button": {
              background: "white",
              color: "black",
              borderRadius: "50%",
              "&:hover": {
                background: "black",
                color: "white",
              },
            },
          }}
          onChange={onPageChange}
        />
      )}
    </Box>
  );
};

export default CustomPagination;
