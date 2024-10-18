import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { BsPerson } from "react-icons/bs";
import CategoryButton from "./CategoryButton";
import SkillSearchBox from "./SkillSearchBox";
import Image from "next/image";

const subCategories = [
  {
    Icon: BsPerson,
    text: "Furniture Assembly",
  },
  {
    Icon: BsPerson,
    text: "Light Fixture Installation",
  },
  {
    Icon: BsPerson,
    text: "Dog Walking",
  },
  {
    Icon: BsPerson,
    text: "Pet Sitting",
  },
  {
    Icon: BsPerson,
    text: "Pet Feeding",
  },
  {
    Icon: BsPerson,
    text: "Basic Grooming (brushing bathing)",
  },
  {
    Icon: BsPerson,
    text: "Pet Transportation",
  },
  {
    Icon: BsPerson,
    text: "Painting Services",
  },
  {
    Icon: BsPerson,
    text: "Minor Plumbing Repairs",
  },
  {
    Icon: BsPerson,
    text: "Minor Electrical Repairs",
  },
  {
    Icon: BsPerson,
    text: "Hanging Pictures and Shelves",
  },
  {
    Icon: BsPerson,
    text: "TV Mounting",
  },
  {
    Icon: BsPerson,
    text: "Appointment Scheduling",
  },
  {
    Icon: BsPerson,
    text: "Travel Planning",
  },
  {
    Icon: BsPerson,
    text: "Event Planning",
  },
];

const skillCategories = [
  {
    Icon: BsPerson,
    text: "Pet Care Services",
  },
  {
    Icon: BsPerson,
    text: "Handyman Services",
  },
  {
    Icon: BsPerson,
    text: "Personal Assistance and Concierge Services",
  },
];

const SignupForm = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1000px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "24px",
              fontFamily: "Open Sans, sans-serif",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Select Your Skill Category
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
              fontFamily: "Open Sans, sans-serif",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Choose the main skill category that best fits your services.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              marginY: "24px",
            }}
          >
            {skillCategories.map((skill, index) => {
              return (
                <>
                  <CategoryButton key={index} {...skill} />
                </>
              );
            })}
          </Box>
          <SkillSearchBox />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            gap: "10px",
            marginY: "24px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontFamily: "Open Sans, sans-serif",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Define Your Expertise
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
              fontFamily: "Open Sans, sans-serif",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Select specific any 3 subcategories that highlight your areas of
            expertise within your chosen skill.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginY: "24px",
              alignItems: "center",
              maxWidth: "864px",
              marginBottom: "53px",
            }}
          >
            {subCategories.map((skill, index) => {
              return (
                <>
                  <CategoryButton key={index} {...skill} />
                </>
              );
            })}
          </Box>
          <Button
            sx={{
              maxWidth: "314px",
              width: "100%",
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SignupForm;
