import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useId, ReactNode } from "react";
import { Translated } from "@/lang/languageContext";

interface ISelect {
  label: string;
  options: {
    label: string;
    value: string | number;
  }[];
  onChange: (
    event: SelectChangeEvent<string | number | undefined>,
    child: ReactNode
  ) => void;
  value?: string | number;
  disabled?: boolean
}

const CustomSelect = ({ label, options, onChange, value, disabled }: ISelect) => {
  const id = useId();

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={id} sx={{ color: "white" }}>
        {Translated(label)}
      </InputLabel>
      <Select disabled={disabled} id={id} label={Translated(label)} onChange={onChange} value={value}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {Translated(option.label)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
