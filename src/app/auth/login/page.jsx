"use client";
import {
  Box,
  Button,
  Card,
  FormGroup,
  FormLabel,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import Image from "next/image";
import SIGN_IMAGE from "../../../assets/sign_in.png";
import { BiLock } from "react-icons/bi";

const LoginPage = () => {
  const [enable, setEnable] = useState(false);
  const [formType, setFormType] = useState("email");
  return (
    <>
      <Box className="w-screen h-screen flex items-center justify-evenly">
        <Box
          sx={{
            backgroundColor: "#FBFFFA",
            border: "1px solid #F0FEEB",
            maxWidth: "600px",
            width: "100%",
            borderRadius: "8px",
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          px={"32px"}
          py={"71px"}
        >
          <Typography
            sx={{
              color: "#141522",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: "40px",
              display: "flex",
              alignItems: "baseline",
            }}
          >
            <Typography
              sx={{
                color: "#141522",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: "48px",
              }}
            >
              L
            </Typography>
            OGIN
          </Typography>
          <Box className="mb-[62px] flex">
            <Typography
              sx={{
                fontFamily: "Open sans, sans-serif",
                fontSize: "21px",
                color: formType == "email" ? "#70726F" : "#AAAAA9",
                borderBottom:
                  formType == "email" ? "1px solid #B9B5B5" : "none",
                px: "10px",
                width: "fit-content",
                fontWeight: 600,
                cursor: "pointer",
              }}
              onClick={() => {
                setFormType("email");
              }}
            >
              Email
            </Typography>
            <Typography
              sx={{
                fontFamily: "Open sans, sans-serif",
                fontSize: "21px",
                color: formType == "number" ? "#70726F" : "#AAAAA9",
                borderBottom:
                  formType == "number" ? "1px solid #B9B5B5" : "none",
                px: "10px",
                width: "fit-content",
                fontWeight: 600,
                cursor: "pointer",
              }}
              onClick={() => {
                setFormType("number");
              }}
            >
              Number
            </Typography>
          </Box>
          <Box
            sx={{
              marginBottom: "48px",
              width: "100%",
            }}
          >
            <FormGroup className="mb-[26px]">
              <FormLabel
                sx={{
                  fontSize: "20px",
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: "600",
                  color: "#3F4346",
                  marginBottom: "16px",
                }}
              >
                {formType == "email" ? "Email Address" : "Phone No."}
              </FormLabel>
              <TextField
                sx={{
                  borderRadius: "28px",
                  "& .MuiInputBase-root": {
                    height: "50px !important",
                  },
                  "& input": {
                    fontFamily: "Open Sans, sans-serif",
                    fontSize: "14px",
                    color: "#70726F",
                    padding: "10px 14px 10px 0px",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderRadius: "28px",
                      border: "1px solid #B9BBB8",
                    },
                    "&:hover fieldset": {
                      borderColor: "black",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#B9BBB8",
                    },
                  },
                }}
                type={formType}
                placeholder={`Enter your ${formType}`}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BsPerson className="ml-[5px] h-[18px] w-[18px] text-[#70726F]" />
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />
            </FormGroup>
            <FormGroup className="mb-[20px]">
              <FormLabel
                sx={{
                  fontSize: "20px",
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: "600",
                  color: "#3F4346",
                  marginBottom: "16px",
                }}
              >
                Password
              </FormLabel>
              <TextField
                sx={{
                  borderRadius: "28px",
                  "& .MuiInputBase-root": {
                    height: "50px !important",
                  },
                  "& input": {
                    fontFamily: "Open Sans, sans-serif",
                    fontSize: "14px",
                    color: "#70726F",
                    borderRadius: "28px",
                    padding: "10px 14px 10px 0px",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderRadius: "28px",
                      border: "1px solid #B9BBB8",
                    },
                    "&:hover fieldset": {
                      borderColor: "black",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#B9BBB8",
                    },
                  },
                }}
                type="password"
                placeholder="Enter your password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BiLock className="ml-[5px] h-[18px] w-[18px]" />
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />
            </FormGroup>
            <Link
              style={{
                fontFamily: "Open sans, sans-serif",
                width: "100%",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                fontWeight: 600,
              }}
              href={"/"}
            >
              Forgot Password?
            </Link>
          </Box>
          <Button
            sx={{
              marginBottom: "20px",
            }}
            variant="contained"
            disabled
          >
            Login
          </Button>
          <Typography
            sx={{
              fontFamily: "Open sans, sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              color: "#5A5D60",
              textAlign: "center",
            }}
          >
            Don't have an account?{" "}
            <Link
              style={{
                fontFamily: "Open sans, sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                color: "#546FFF",
              }}
              href={"/"}
            >
              Signup
            </Link>
          </Typography>
        </Box>
        <Box>
          <Image src={SIGN_IMAGE} width={460} height={461} />
        </Box>
      </Box>
    </>
  );
};

export default LoginPage;
