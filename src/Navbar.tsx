import {
  Grid,
  Paper,
  ButtonGroup,
  Button,
  Icon,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import * as React from "react";

interface NavbarProps {
  children: JSX.Element;
}

const Navbar = () => {
  return (
    <Grid
      container
      component={Paper}
      elevation={4}
      alignItems="center"
      sx={{ height: "10vh", display: "flex", flexDirection: "row" }}
    >
      <Grid item lg={8} sx={{}}>
        <IconButton>
          <Image
            width={1}
            height={1}
            src="/download (1)_2.svg"
            alt="icon aibox"
          />
        </IconButton>
        <IconButton>
          <Image
            src="/download_2.svg"
            width={51}
            height={13}
            alt="logo aibox"
          />
        </IconButton>
        <ButtonGroup
          variant="text"
          color="inherit"
          aria-label="text group button"
          sx={{ marginRight: "12vw" }}
        >
          <Button>خانه</Button>
          <Button>درباره ما </Button>
          <Button>مارکت API </Button>
        </ButtonGroup>
      </Grid>
      <Grid item lg={4}>
        <ButtonGroup variant="text" color="inherit" aria-label="text group ">
          <Button name="signup">ثبت نام</Button>
          <Button name="signin" variant="contained">
            ورود
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export default Navbar;
