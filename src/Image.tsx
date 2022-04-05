import { Paper } from "@mui/material";
import Image from "next/image";
import * as React from "react";

interface ImageLoginProps {
  children: JSX.Element;
}

const ImageLogin: FunctionComponent<ImageLoginProps> = () => {
  return (
    <Paper>
      <Image src="/image.svg" width={265} height={369}></Image>
    </Paper>
  );
};

export default ImageLogin;
