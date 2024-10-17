import { createTheme } from "@mui/material/styles";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";

import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";

export const theme = createTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    h1: {
      fontFamily: "Montserrat",
    },
  },
  palette: {
    background: {
      default: "white",
      paper: "#FBFFFA",
    },
  },
  components: {
    // Button
    MuiButton: {
      styleOverrides: {
        // ROOT
        root: {
          backgroundColor: "#155003",
          color: "white",
          padding: "10px",
          "&:hover": {
            backgroundColor: "#155003",
          },
          textTransform: "none",
          fontSize: "16px",
          fontFamily: "Open Sans, sans-serif",
          fontWeight: "600",
          borderRadius: "7px",
          height: "47px",
          maxWidth: "200px",
          width: "100%",
          outline: "none",
          border: "none",
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
          // FOR DISABLED
          "&.Mui-disabled": {
            backgroundColor: "#70726F",
            color: "white",
          },
          // FOR OUTLINED
          "&.MuiButton-outlined": {
            backgroundColor: "white",
            color: "#141522",
            border: "1px solid #141522",
          },
        },
      },
    },
  },
});
