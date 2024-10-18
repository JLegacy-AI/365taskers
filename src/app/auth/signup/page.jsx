"use client";

import { Box, Typography } from "@mui/material";
import Stepper from "./_components/Stepper";
import SignupForm from "./_components/SignupForm";
import Image from "next/image";

const SignupPage = () => {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          padding: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <Box
          sx={{
            paddingY: "30px",
            paddingX: "52px",
            display: "flex",
            maxWidth: "1000px",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#FBFFFA",
            border: "1px solid #F0FEEB",
            boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.25)",
            borderRadius: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: "40px",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  color: "#141522",
                }}
              >
                Y
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "36px",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  color: "#141522",
                }}
              >
                OUR
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: "40px",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  color: "#141522",
                }}
              >
                E
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "36px",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  color: "#141522",
                }}
              >
                XPERTISE
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: "40px",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  color: "#141522",
                }}
              >
                C
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "36px",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  color: "#141522",
                }}
              >
                ATEGORIES
              </Typography>
            </Box>
          </Box>
          <Stepper activeStep={1} totalSteps={4} />
          <SignupForm />
        </Box>
        {/* ABSOLUTE IMAGES */}
        <Image
          style={{
            position: "absolute",
            bottom: -60,
            left: -10,
          }}
          src={"/categories_bottom_left.svg"}
          height={400}
          width={400}
        />
        <Image
          style={{
            position: "absolute",
            top: -170,
            right: -50,
          }}
          src={"/categories_top_right.svg"}
          height={465}
          width={360}
        />
      </Box>
    </>
  );
};

export default SignupPage;
