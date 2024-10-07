import { createTheme } from "@mui/material";
import { cyan, green } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: green[700],
      dark: green[800],
      light: green[500],
      contrastText: "#FFF",
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: "#FFF",
    },
    background: {
      default: "#202124",
      paper: "#303134",
    },
  },
});
