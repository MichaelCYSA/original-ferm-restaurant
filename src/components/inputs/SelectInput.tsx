import { Controller, Control } from "react-hook-form";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useId } from "react";
import { Translated } from "@/lang/languageContext";

export interface ISelectInput {
  label: string;
  control: Control<any>;
  name: string;
  rules?: any;
  error?: any;
  options: {
    label: string;
    value: string;
  }[];
}

const SelectInput = ({
  label,
  control,
  name,
  options,
  rules,
  error,
}: ISelectInput) => {
  const id = useId();
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={id} sx={{ color: "white" }}>
        {Translated(label)}
      </InputLabel>
      <Controller
        rules={rules}
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            error={Boolean(error?.[name])}
            id={id}
            sx={MuiSelectStyles}
            label={label}
            variant="outlined"
            {...field}
          >
            {options.map((option, index) => (
              <MenuItem key={`${option.value}-${index}`} value={option.value}>
                {Translated(option.label)}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
};

export default SelectInput;

export const MuiSelectStyles = {
  color: "white",
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
  ".MuiSvgIcon-root ": {
    fill: "white !important",
  },
};
