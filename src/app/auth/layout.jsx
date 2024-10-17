"use client";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../lib/themes/light";

const AuthLayout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default AuthLayout;
