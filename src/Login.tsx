import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import InputField from "./InputField";

const theme = createTheme();

export default function Login() {
  const [userdata, setData] = useState({ email: "", password: "" });
  const { email, password } = userdata;

  const onChangeHandler = (e: any) => {
    setData({ ...userdata, [e.currentTarget.name]: [e.currentTarget.value] });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(email, password);
    const defaultUser = {
      defaultEmail: "98ranjbar@gmail.com",
      defaultPassword: "azxc*1998",
    };

    if (
      email[0] === defaultUser.defaultEmail &&
      password[0] == defaultUser.defaultPassword
    ) {
      console.log("soyou just loged in , now what?");
    } else {
      console.log("nononon");
    }
  };
  const handleSubmit2 = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Grid item xs={12} sm={10} md={10} component={Paper} elevation={0} square>
      <Box
        sx={{
          paddingX: "9vw",
          my: 8,
          mx: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h3">
          ورود{" "}
        </Typography>
        <Box component="form" dir="rtl" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <InputField
            value={email}
            type="email"
            id="email"
            name="email"
            onChange={onChangeHandler}
            label=" ایمیل"
          ></InputField>
          <InputField
            value={password}
            type="password"
            id="password"
            name="password"
            onChange={onChangeHandler}
            label="گذرواژه"
          ></InputField>

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="مرا بخاطر بسپار"
          />
          <Button
            name="submit"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            وارد شوید
          </Button>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <Grid item>
              <Link href="#" variant="body2" sx={{ marginTop: "10px" }}>
                گذرواژه خودرا فراموش کرده اید؟
              </Link>
            </Grid>
            <Grid item>
              هنوز حساب کاربری ندارید؟
              <Link
                href="#"
                variant="body2"
                sx={{ marginTop: "10px", paddingTop: "10px" }}
              >
                {" ثبت نام کنید"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
}
