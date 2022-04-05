import { Grid, Paper, ButtonGroup, Button } from "@mui/material";
import * as React from "react";

interface NavbarProps {
  children: JSX.Element;
}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <Paper>
      <Grid container>
        <Grid item lg={8}>
          <ButtonGroup
            variant="text"
            color="inherit"
            aria-label="text group button"
          >
            <Button>خانه</Button>
            <Button>درباره ما </Button>
            <Button>مارکت API </Button>
          </ButtonGroup>
        </Grid>
        <Grid item lg={4}>
          <ButtonGroup variant="text" color="inherit" aria-label="text group ">
            <Button>ورود</Button>
            <Button>ثبت نام</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Navbar;
