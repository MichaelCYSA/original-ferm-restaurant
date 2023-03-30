import { TypographyOptions, TypographyStyleOptions } from '@mui/material/styles/createTypography';

declare module '@mui/material/styles' {
  interface TypographyVariantsOptions {
    link: TypographyStyleOptions;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    link: true;
  }
}

const createTypography = (): TypographyOptions => ({
  fontFamily: 'TrebuchetMS',
  fontSize: 20,
  h1: {
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: 'MatchaSmoothies',
    color: 'white',
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#9FCD57',
  },
  h3: {
    fontSize: 20,
    fontWeight: 700,
    color: 'white',
  },
  h4: {
    fontSize: 16,
    fontWeight: 400,
    color: 'white',
  },
  link: {
    fontSize: 20,
    color: 'white',
    cursor: 'pointer',
    transition: 'color 0.2s',
    '&:hover': {
      color: '#9FCD57',
    },
  },
});

export default createTypography;