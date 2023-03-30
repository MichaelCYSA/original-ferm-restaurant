import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const Cart = () => {

    return (
        <Box sx={{ position: 'relative' }}>
            <Image src={'/icon-cart.png'} width={24} height={24} alt={'cart'} />
            <Box sx={{
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: 'white',
                position: 'absolute',
                top: '14px',
                left: '12px',
                display: 'flex',
                alignItems: 'center'

            }}>
                <Typography component={'span'} sx={{ color: '#9FCD57', fontSize: '16px', textAlign: 'center', width: '100%' }}>5</Typography>
            </Box>
        </Box>
    )
}

export default Cart