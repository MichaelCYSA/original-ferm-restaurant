import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

const LanguageSelect = () => {

    const [lang, setLang] = useState('Ro')

    const handleChange = (e: SelectChangeEvent<string>) => setLang(e.target.value)

    return (
        <Select
            onChange={handleChange}
            sx={LangSelectStyles}
            value={lang}
            MenuProps={{
                sx: {
                    '& .MuiMenuItem-root': {
                        fontSize: 20,
                    },
                },
            }}
        >
            <MenuItem value={'Ro'}>Ro</MenuItem>
            <MenuItem value={'Ru'}>Ru</MenuItem>
        </Select >
    );
};

export default LanguageSelect;


const LangSelectStyles = {
    height: 32,
    fontSize: 20,
    mt: '-4px',
    color: '#9FCD57',
    '& .MuiSelect-icon': {
        display: 'none',
    },
    '&:after': {
        content: "''",
        position: 'absolute',
        top: '50%',
        backgroundImage: 'url("/arrow-down.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right center',
        right: 8,
        transform: 'translateY(-50%)',
        width: 12,
        height: 12,
    },
}
