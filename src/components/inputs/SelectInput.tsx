import { Controller, Control } from "react-hook-form";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useId } from "react";

export interface ISelectInput {
  label: string;
  control: Control<any>;
  name: string;
  options: {
    label: string;
    value: string;
  }[];
}

const SelectInput = ({ label, control, name, options }: ISelectInput) => {
  const id = useId();
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={id} sx={{ color: "white" }}>
        {label}
      </InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select id={id}label={label} {...field}>
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
};

export default SelectInput;
