import { menuLinks } from '@/constants/links';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { Translated } from '@/lang/languageContext';

const Menu = () => {

    const [activeLink, setActiveLink] = useState('')

    const scrollToDiv = (id: string) => () => {
        const element = document.getElementById(id);
        if (!element) return;
        setActiveLink(id)
        element.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <Box display={'flex'} flexDirection={'column'} gap={3}>
            <Typography
                variant='h1'
                sx={{ color: '#9FCD57' }}
            >
                Menu
            </Typography>
            <Box display={'flex'} gap={'16px'} flexWrap={'wrap'}>
                {
                    menuLinks.map(link => (
                        <Typography
                            onClick={scrollToDiv(link.link)}
                            key={link.link}
                            sx={{
                                fontSize: '18px',
                                fontWeight: 400,
                                color: (activeLink === link.link) ? '#9FCD57' : 'white'
                            }}
                            variant='link'
                        >
                            {
                                Translated(link.name)
                            }
                        </Typography>

                    ))
                }
            </Box>
        </Box>
    )
}

export default Menu