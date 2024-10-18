import { Box, Button } from "@mui/material";
import React from "react";

const CategoryButton = ({ Icon, text }) => {
  return (
    <Button
      sx={{
        height: "40px",
        width: "fit-content",
        borderRadius: "29px",
        textWrap: "nowrap",
        backgroundColor: "white",
        "&:hover": {
          backgroundColor: "white",
        },
        border: "1px solid #E0FAEF",
        color: "#70726F",
        fontSize: "14px",
        fontWeight: 400,
        paddingX: "6px",
        paddingY: "4px",
        paddingRight: "8px",
        boxShadow: "none",
        "& .MuiButton-icon": {
          margin: "0px",
          marginRight: "6px",
          padding: "4px",
          height: "32px",
          width: "32px",
          color: "#155003",
          border: "1px solid #E1ECF5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "100%",
          padding: "8px",
        },
      }}
      startIcon={
        <Icon
          style={{
            width: "16px",
            height: "16px",
            color: "#155003",
          }}
        />
      }
    >
      {text}
    </Button>
  );
};

export default CategoryButton;
