import React from "react";
import { Box, styled, Step } from "@mui/material";

const StepCircle = styled(Step)(({ theme, active }) => ({
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#F5FBFF",
  border: "1px solid #F8F8F8",
  borderRadius: "50%",
  color: active ? "#155003" : "#70726F",
  fontFamily: "Montserrat",
  fontWeight: "bold",
  fontSize: "20px",
}));

// Stepper component
const Stepper = ({ activeStep, totalSteps }) => {
  return (
    <Box
      sx={{
        width: "fit-content",
        paddingX: "20px",
        paddingTop: "35px",
        paddingBottom: "62px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {[...Array(totalSteps)].map((e, i) => (
          <Box key={i} sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                height: "6px",
                width: i == 0 ? "60px" : "120px",
                borderRadius: "20px",
                backgroundColor: i < activeStep ? "#155003" : "#DADADA",
              }}
            ></Box>
            <StepCircle active={i < activeStep}>{i + 1}</StepCircle>
            {i == totalSteps - 1 ? (
              <Box
                sx={{
                  height: "6px",
                  width: "60px",
                  borderRadius: "20px",
                  backgroundColor: "#DADADA",
                }}
              ></Box>
            ) : (
              <></>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Stepper;
