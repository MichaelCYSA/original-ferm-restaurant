import { headerLinks } from '@/constants/links';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import Cart from './components/cart';
import LanguageSelect from './components/languageSelect';

const Header = () => {
    return (
        <Box component={'header'} display={'flex'} justifyContent={'space-between'} height={'84px'} alignItems={'center'}>
            <Image src={'/logo.png'} width={240} height={42} alt={'Ferma cu Origin'} />
            <Box display={'flex'} gap={3}>
                {
                    headerLinks.map((item) => (
                        <Typography variant='link' key={item.name}>
                            {item.name}
                        </Typography>
                    ))
                }
                <LanguageSelect />
                <Cart />
            </Box>
        </Box>
    )
}

export default Header 