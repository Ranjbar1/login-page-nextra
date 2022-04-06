import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/Link";
import Navbar from "../src/Navbar";
import Login from "../src/Login";
import Grid from "@mui/material/Grid";
import ImageLogin from "../src/Image";

const Home: NextPage = () => {
  return (
    <div dir="rtl">
      <Navbar></Navbar>
      <Grid container spacing={2}>
        <Grid item>
          <Login></Login>
        </Grid>
        <Grid item xs={false}>
          <ImageLogin></ImageLogin>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
