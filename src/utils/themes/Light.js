import { createTheme } from "@mui/material";
import { purple, green, red, yellow } from "@mui/material/colors";

export const LightTheme = createTheme({
  pallete: {
    primary: {
      main: purple[500],
      dark: purple[700],
      light: purple[300],
      contrastText: "#ffffff",
    },
    success: {
      main: green[500],
      dark: green[700],
      light: green[300],
      contrastText: "#ffffff",
    },
    danger: {
      main: red[500],
      dark: red[700],
      light: red[300],
      contrastText: "#ffffff",
    },
    warning: {
      main: yellow[500],
      dark: yellow[700],
      light: yellow[300],
      contrastText: "#000000",
    },
  },
});
