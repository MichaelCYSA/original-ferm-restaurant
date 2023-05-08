import { IProduct, productCategoriesCookTime } from '@/constants/products';
import { Translated } from '@/lang/languageContext';
import { IOrder } from '@/types/order.types';
import { Typography } from '@mui/material';
import moment from 'moment';
import { useEffect, useMemo, useState } from 'react';

const OrderTimer = ({ order }: { order: IOrder }) => {


    const [timeLeft, setTimeLeft] = useState(0);



    useEffect(() => {
        const createdAt = moment(order.createdAt).valueOf();
        const nowTime = new Date().getTime();
        const renderTimeDiff = nowTime - createdAt;

        const { products } = order;
        let maxCookTime = 0;
        products.forEach((product: IProduct) => {
            const cookTime = (productCategoriesCookTime as any)[product.productType];
            if (cookTime > maxCookTime) {
                maxCookTime = cookTime;
            }
        });


        if (maxCookTime - renderTimeDiff > 0) {
            setTimeLeft(Math.max(maxCookTime - renderTimeDiff, 0));
            const intervalId = setInterval(() => {
                const nowTimeDiff = new Date().getTime() - createdAt;
                setTimeLeft(Math.max(maxCookTime - nowTimeDiff, 0));
            }, 10000);

            return () => clearInterval(intervalId);
        } else {
            setTimeLeft(0);
        }


    }, [order]);

    return (
        <Typography
            color={!timeLeft ? 'red' : 'orange'}
            variant="h3"
        >
            {!timeLeft
                ? Translated('time_is_over')
                : `${Translated('left_time')}: ${Math.ceil(timeLeft / 60000)
                } ${Translated('minutes')}`}
        </Typography>
    );
};

export default OrderTimer;