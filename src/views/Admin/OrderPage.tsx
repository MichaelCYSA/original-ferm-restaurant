import CustomPagination from '@/components/CustomPagination/CustomPagination';
import CustomSelect from '@/components/inputs/CustomSelect';
import OrderItem, { orderOption } from '@/components/OrderItem/OrderItem';
import { Translated } from '@/lang/languageContext';
import { useGetOrdersQuery } from '@/store/api/orders';
import { IOrder } from '@/types/order.types';
import { Box, Button, CircularProgress, Grid, SelectChangeEvent, TextField, useTheme } from '@mui/material';
import { useMemo, useState } from 'react';

const limit = 10;

const OrderPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState<number | string>('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const {
    data,
    isLoading,
    status: reqState,
  } = useGetOrdersQuery({
    take: limit,
    skip: currentPage * limit - limit,
    status,
    fromDate,
    toDate,
  });

  const pages = useMemo(() => Math.ceil(data?.count / limit) ?? 0, [data]);

  const theme = useTheme();

  const handleChangeStatus = (
    e: SelectChangeEvent<string | number | undefined | null>
  ) => setStatus(e.target.value as any);

  const clearFilter = () => {
    setStatus('');
    setFromDate('');
    setToDate('');
  };

  return (
    <Box width={1} display={"flex"} flexDirection={"column"} gap={3}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <CustomSelect
            label="status"
            value={status}
            onChange={handleChangeStatus}
            options={orderOption}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            fullWidth
            variant="outlined"
            type={"date"}
            label={Translated("date_form")}
            InputLabelProps={{
              shrink: true,
            }}
            value={fromDate}
            onChange={(e: any) => setFromDate(e.target.value)}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            fullWidth
            variant="outlined"
            type={"date"}
            InputLabelProps={{
              shrink: true,
            }}
            label={Translated("date_to")}
            value={toDate}
            onChange={(e: any) => setToDate(e.target.value)}
          />
        </Grid>
        <Grid item xs={6} md={3} display={"flex"} alignItems={"center"}>
          <Button onClick={clearFilter} variant="contained">
            {Translated("clear")}
          </Button>
        </Grid>
      </Grid>
      {!isLoading &&
        reqState != "pending" &&
        data?.data?.map((order: IOrder, index: number) => (
          <OrderItem key={`${order._id}-${index}`} order={order} />
        ))}
      {isLoading ||
        (reqState === "pending" && (
          <Box
            minHeight={"400px"}
            width={1}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <CircularProgress sx={{ color: theme.palette.customColor.main }} />
          </Box>
        ))}

      <CustomPagination
        currentPage={currentPage}
        pages={pages}
        onPageChange={(_: any, page: number) => setCurrentPage(page)}
      />
    </Box>
  );
};

export default OrderPage;
