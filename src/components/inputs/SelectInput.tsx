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
            label={label}
            {...field}
          >
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
