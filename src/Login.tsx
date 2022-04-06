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

const theme = createTheme();

export default function Login() {
  const [userdata, setData] = useState({ email: "", password: "" });
  const { email, password } = userdata;

  const onChangeHandler = (e: any) => {
    setData({ ...userdata, [e.target.name]: [e.target.value] });
  };
  console.log(userdata);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(userdata);
  };
  const handleSubmitt = (event: React.FormEvent<HTMLFormElement>) => {
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
        <Typography component="h1" variant="h5">
          ورود{" "}
        </Typography>
        <Box component="form" dir="rtl" onSubmit={handleSubmitt} sx={{ mt: 1 }}>
          <TextField
            onChange={onChangeHandler}
            margin="normal"
            required
            fullWidth
            id="email"
            label="آدرس ایمیل"
            name="email"
            autoComplete="email"
            autoFocus
            variant="standard"
            value={email}
          />
          <TextField
            variant="standard"
            onChange={onChangeHandler}
            margin="normal"
            required
            fullWidth
            error
            name="password"
            label="رمز عبور"
            type="password"
            id="password"
            value={password}
            autoComplete="current-password"
          />
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
