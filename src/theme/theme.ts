import { createTheme } from '@mui/material/styles';

import createTypography from './typography';

const typography = createTypography()

const theme = createTheme({
  typography
});

export default theme;