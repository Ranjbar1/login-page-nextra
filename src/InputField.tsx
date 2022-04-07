import * as React from "react";
import TextField from "@mui/material/TextField";
interface InputFieldProps {
  onChange: any;
  value: string;
  id: string;
  label: string;
  name: string;
  type: string;
}

const InputField = ({
  onChange,
  id,
  label,
  name,
  type,
  value,
}: InputFieldProps) => {
  return (
    <TextField
      onChange={onChange}
      margin="normal"
      required
      fullWidth
      id={id}
      label={label}
      name={name}
      type={type}
      autoComplete={type}
      autoFocus
      variant="standard"
      value={value}
    />
  );
};

export default InputField;
