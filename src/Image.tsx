import { Box, Paper } from "@mui/material";
import Image from "next/image";
import * as React from "react";

interface ImageLoginProps {
  children: JSX.Element;
}

const ImageLogin = () => {
  return (
    <Paper elevation={0}>
      <Box sx={{ display: "block", minWidth: 600, height: "auto" }}>
        <Image src="/image.svg" width={265} height={369} alt="bg image"></Image>
      </Box>
    </Paper>
  );
};

export default ImageLogin;
