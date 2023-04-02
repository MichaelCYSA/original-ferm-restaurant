import { sauces, SupplementsItem as SupplementsItemInterface, toppings } from '@/constants/products';
import { Box, Typography } from '@mui/material';

const Supplements = () => {
    return (
        <Box
            borderRadius={'10px'}
            border={'1.5px solid #9FCD57'}
            display={'flex'} p={'20px'}
            gap={2}
            minHeight={'100%'}
        >
            <Box
                display={'flex'}
                flexDirection={'column'}
                gap={'12px'}
            >
                <Box>
                    <Typography variant='h1'>Sosuri</Typography>
                    <Typography variant='h3'>50 g</Typography>
                </Box>
                {
                    sauces.map(sauce => (
                        <SupplementsItem key={sauce.name} item={sauce} />
                    ))
                }
            </Box>
            <Box
                width={'2px'}
                sx={{ background: '#9FCD57' }}
                minHeight={'90%'}
            />
            <Box display={'flex'} flexDirection={'column'} gap={'12px'}>
                <Box>
                    <Typography variant='h1'>TOPPINGURi</Typography>
                    <Typography variant='h3'>50 g</Typography>
                </Box>
                {
                    toppings.map(topping => (
                        <SupplementsItem key={topping.name} item={topping} />
                    ))
                }
            </Box>
        </Box>
    )
}

export default Supplements

const SupplementsItem = ({ item }: { item: SupplementsItemInterface }) => {
    return (
        <Box display={'flex'} alignItems={'center'} gap={'4px'}>
            <Typography variant='h3'>{item.name} - {item.price} mdl</Typography>
            {/* <Image src={'/add.png'} width={24} height={24} alt={'add'} />*/}
        </Box>
    )
}