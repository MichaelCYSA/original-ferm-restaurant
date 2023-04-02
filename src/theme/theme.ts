import { createTheme } from '@mui/material/styles';

import createTypography from './typography';

const typography = createTypography();

const theme = createTheme({
  typography,
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#9FCD57",
          borderRadius: "10px",
          color: "white",
          fontWeight: 700,
          fontSize: "18px",
          fontFamily: "TrebuchetMS",
          "&:hover": {
            backgroundColor: "#FFFFFF",
            color: "#9FCD57",
          },
          "&:disabled": {
            opacity: 0.85,
          },
        },
      },
      defaultProps: {
        variant: "contained",
      },
    },
  },
});

export default theme;
