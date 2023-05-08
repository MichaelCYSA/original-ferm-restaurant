import { Translated } from '@/lang/languageContext';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { ReactNode, useId } from 'react';

import { MuiSelectStyles } from './SelectInput';

interface ISelect {
  label: string;
  options: {
    label: string;
    value: string | number;
  }[];
  onChange: (
    event: SelectChangeEvent<string | number | undefined | null>,
    child: ReactNode
  ) => void;
  value?: string | number | null;
  disabled?: boolean
}

const CustomSelect = ({ label, options, onChange, value, disabled }: ISelect) => {
  const id = useId();

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={id} sx={{ color: "white" }}>
        {Translated(label)}
      </InputLabel>
      <Select sx={MuiSelectStyles} disabled={disabled} id={id} label={Translated(label)} onChange={onChange} value={value}>
        {options.map((option, index) => (
          <MenuItem key={`${option.value}-${index}`} value={option.value}>
            {Translated(option.label)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
