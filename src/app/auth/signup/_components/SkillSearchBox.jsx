import { TextField, InputAdornment } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";

const SkillSearchBox = () => {
  return (
    <TextField
      variant="outlined"
      placeholder="Search your skill"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IoIosArrowDown
              sx={{
                fontSize: "18px",
                color: "#B5B5B5",
              }}
            />
          </InputAdornment>
        ),
        sx: {
          fontSize: "16px",
          fontWeight: "400",
        },
      }}
      sx={{
        backgroundColor: "#FFFFFF",
        maxHeight: "50px",
        width: "100%",
        "& .MuiInputBase-input": {
          paddingX: "30px",
          color: "#B5B5B5",
          fontSize: "16px",
          fontFamily: "Open Sans, sans-serif",
        },
        "& .MuiOutlinedInput-root": {
          "& input": {
            height: "100%",
          },
          "& fieldset": {
            borderColor: "#B5B5B5",
            borderRadius: "28px",
          },
          "&:hover fieldset": {
            borderColor: "#B5B5B5",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#B5B5B5",
          },
        },
      }}
    />
  );
};

export default SkillSearchBox;
