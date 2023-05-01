import { Product } from '@/constants/products';
import { useGetProductsQuery } from '@/store/api/product';
import { Box } from '@mui/material';

import ProductCard from '../ProductCard';

const ProductsSection = ({ section, id }: { section: string, id: string }) => {

    const { data, isLoading = true } = useGetProductsQuery({ type: section })
    console.log({ data })
    return (
        <>
            {data?.data?.map((product: Product, index: number) => {
                return (
                    <Box
                        key={product.name + index}
                        width={{
                            xs: "calc((100% - 20px) / 2)",
                            sm: "calc((100% - 44px) / 2)",
                            md: "calc((100% - 160px) / 3)",
                            lg: "calc((100% - 132px) / 4)",
                        }}
                    >
                        <ProductCard item={product} />
                    </Box>
                );
            })}
        </>
    )
}

export default ProductsSection