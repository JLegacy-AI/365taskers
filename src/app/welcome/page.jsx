import "../globals.css";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";

const WelcomePage = () => {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          backgroundImage: `url(${"/welcome.jpg"})`,
          backgroundPosition: "top right",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          display: "flex",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#141522",
            width: { xs: "100%", sm: "566px" },
            height: "100vh",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              justifyItems: "center",
              alignItems: "center",
              backgroundColor: "#141522",
              color: "transparent",
              fontSize: "200px",
              fontWeight: 700,
              fontFamily: "Montserrat, sans-serif",
              lineHeight: "187px",
              backgroundImage: `url(${"/welcome.jpg"})`,
              backgroundSize: "cover",
              backgroundRepeat: "repeat-x",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              textAlign: "end",
              height: "100vh",
              backgroundColor: "",
            }}
          >
            36 <br />
            TASK
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                bottom: "40px",
                px: "20px",
                py: "20px",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: "24px",
                  marginBottom: "62px",
                  textAlign: "center",
                }}
              >
                Choose your role to continue with:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
                gap={"10px"}
              >
                <Button
                  sx={{
                    maxWidth: "189px",
                    backgroundColor: "none",
                    color: "white",
                    padding: "10px",
                    "&:hover": {
                      backgroundColor: "none",
                    },
                    textTransform: "none",
                    fontSize: "16px",
                    fontFamily: "Open Sans, sans-serif",
                    fontWeight: "600",
                    borderRadius: "7px",
                    height: "47px",
                    width: "100%",
                    outline: "none",
                    border: "none",
                    boxShadow:
                      "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
                    // FOR OUTLINED
                    "&.MuiButton-outlined": {
                      backgroundColor: "none",
                      color: "white",
                      border: "1px solid white",
                    },
                  }}
                  variant="outlined"
                >
                  Buyer
                </Button>
                <Button
                  sx={{
                    maxWidth: "189px",
                    backgroundColor: "white",
                    color: "#141522",
                    padding: "10px",
                    "&:hover": {
                      backgroundColor: "white",
                    },
                    textTransform: "none",
                    fontSize: "16px",
                    fontFamily: "Open Sans, sans-serif",
                    fontWeight: "600",
                    borderRadius: "7px",
                    height: "47px",
                    width: "100%",
                    outline: "none",
                    border: "none",
                    boxShadow:
                      "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
                  }}
                  variant="contained"
                >
                  Tasker
                </Button>
              </Box>
            </Box>
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "566px" },
            height: "100vh",
            position: "relative",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              position: "absolute",
              left: "0px",
              color: "",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "#141522",
                fontSize: "200px",
                fontWeight: 700,
                fontFamily: "Montserrat, sans-serif",
                lineHeight: "187px",
              }}
            >
              5
            </Typography>
            <Typography
              variant="h1"
              sx={{
                color: "#141522",
                fontSize: "200px",
                fontWeight: 700,
                fontFamily: "Montserrat, sans-serif",
                lineHeight: "187px",
              }}
            >
              ERS
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WelcomePage;
