import { Box, Pagination } from "@mui/material"
import { useGetOrdersQuery } from "@/store/api/orders"

const OrderPage = () => {
    const {data, isLoading} = useGetOrdersQuery({})
    console.log({data})
    return(
        <Box width={1} display={'flex'} flexDirection={'column'} gap={2}>
           <Box mt={5} display={'flex'} justifyContent={'center'}>
               <Pagination/>
           </Box>
        </Box>
    )
}

export default OrderPage