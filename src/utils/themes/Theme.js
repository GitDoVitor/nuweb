import { createTheme } from "@mui/material";
import { purple, green, red, yellow, grey } from "@mui/material/colors";

export const Theme = createTheme({
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
    button: {
      main: grey[500],
      dark: grey[700],
      light: grey[300],
      contrastText: "#000000",
    },
  },
});
