import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/Link";
import Navbar from "../src/Navbar";

const Home: NextPage = () => {
  return (
    <div dir="rtl">
      <Navbar></Navbar>
    </div>
  );
};

export default Home;
