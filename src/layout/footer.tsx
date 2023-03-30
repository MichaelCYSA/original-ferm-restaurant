import { headerLinks } from '@/constants/links';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const Footer = () => {
    return (
        <Box component={'footer'} display={'flex'} justifyContent={'space-between'} pb={8} pt={8}>
            <Box display={'flex'} flexDirection={'column'} gap={'18px'}>
                <Box display={'flex'} gap={8}>
                    <Box display={'flex'} flexDirection={'column'} gap={'12px'}>
                        <Typography variant='link'>{headerLinks[0].name}</Typography>
                        <Typography variant='link'>{headerLinks[1].name}</Typography>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} gap={'12px'}>
                        <Typography variant='link'>{headerLinks[3].name}</Typography>
                        <Typography variant='link'>{headerLinks[2].name}</Typography>
                    </Box>
                </Box>
                <Box>
                    <Image src={'/logo.png'} width={359} height={64} alt={'Ferma cu origin'} />
                </Box>
            </Box>
            <Box display={'flex'} flexDirection={'column'} gap={'18px'}>
                <Box display={'flex'} gap={'20px'}>
                    <Typography variant='h3'>Ru</Typography>
                    <Typography variant='h3'>Ro</Typography>
                </Box>
                <Typography variant='h3'>Calea Ieşilor 11/2, Chișinău</Typography>
                <Typography variant='h3'>Lucram 10-22:00, Tel.: 0783 23 231</Typography>
                <Box display={'flex'} gap={2} alignItems={'flex-end'}>
                    <Image src={'/facebook.png'} width={20} height={20} alt={'facebook'} />
                    <Image src={'/instagram.png'} width={20} height={20} alt={'instagram'} />
                    <a
                        href='https://www.instagram.com/restaurant.fermacuorigini/#'
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{ color: 'white', textDecoration: 'underline' }}
                    >
                        <Typography variant='link' sx={{ fontSize: '16px' }}>restaurant.fermacuorigini</Typography>
                    </a>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer 