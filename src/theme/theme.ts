import { createTheme } from "@mui/material/styles";

import createTypography from "./typography";

const typography = createTypography();

declare module '@mui/material/styles' {
  interface Palette {
    customColor: Palette['primary'];
  }
  interface PaletteOptions {
    customColor?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  typography,
  palette: {
    customColor: {
      main: '#9FCD57',
      dark: "#151515",
      light: "#C7D2FF",
    },
  },
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
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
          "& .MuiInputLabel-root": {
            color: "white",
          },
          "& .MuiInputBase-input": {
            color: "white",
          },
        },
      },
      defaultProps: {
        variant: "outlined",
      },
    },
  },
});

export default theme;