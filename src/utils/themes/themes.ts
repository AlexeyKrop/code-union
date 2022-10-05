import { createTheme } from '@mui/material';

const a: () => void = () => {};

console.log(a);
export const theme = createTheme({
  palette: {
    primary: {
      main: '#C1C1CB',
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});
