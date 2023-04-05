import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const CustomSlider = (props: { message: string }) => {
  return (
    <Box sx={{ height: 300 }}>
      <Slider
        // sx={{
        //   '& input[type="range"]': {
        //     WebkitAppearance: "slider-vertical",
        //   },
        // }}
        orientation="vertical"
        defaultValue={30}
        aria-label="Temperature"
        valueLabelDisplay="auto"
        // marks
        // min={10}
        // max={1000}
        // value={10}
        // onKeyDown={preventHorizontalKeyboardNavigation}
      />
    </Box>
  );
};

export default CustomSlider;
