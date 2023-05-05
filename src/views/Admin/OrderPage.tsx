import {
  Box,
  CircularProgress,
  useTheme,
  Grid,
  SelectChangeEvent,
  TextField,
  Button,
} from "@mui/material";
import { useGetOrdersQuery } from "@/store/api/orders";
import { useMemo, useState } from "react";
import OrderItem, { orderOption } from "@/components/OrderItem/OrderItem";
import { IOrder } from "@/types/order.types";
import CustomPagination from "@/components/CustomPagination/CustomPagination";
import CustomSelect from "@/components/inputs/CustomSelect";
import { Translated } from "@/lang/languageContext";

const limit = 10;

const OrderPage = () => {
  const [currentPage, setCurentPage] = useState(1);
  const [status, setStatus] = useState();
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  const { data, isLoading } = useGetOrdersQuery({
    take: limit,
    skip: currentPage * limit - limit,
    status,
    fromDate,
    toDate,
  });

  const pages = useMemo(() => Math.ceil(data?.count / limit) ?? 0, [data]);
  const theme = useTheme();
  const handleChangeStatus = (
    e: SelectChangeEvent<string | number | undefined>
  ) => setStatus(e.target.value as any);

  const clearFilter = () => {
    setStatus(undefined);
    setFromDate(undefined);
    setToDate(undefined);
  };
  return (
    <Box
      width={1}
      display={"flex"}
      justifyContent={"center"}
      minHeight={"100vh"}
    >
      <Box width={1} display={"flex"} flexDirection={"column"} gap={3}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <CustomSelect
              label="status"
              value={status}
              onChange={handleChangeStatus}
              options={orderOption}
            />
          </Grid>
          <Grid item xs={3}>
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
          <Grid item xs={3}>
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
          <Grid item xs={3} display={"flex"} alignItems={"center"}>
            <Button onClick={clearFilter} variant="contained">
              {Translated("clear")}
            </Button>
          </Grid>
        </Grid>
        {!isLoading &&
          data?.data?.map((order: IOrder) => (
            <OrderItem key={order._id} order={order} />
          ))}
        {isLoading && (
          <Box
            minHeight={"400px"}
            width={1}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <CircularProgress sx={{ color: theme.palette.customColor.main }} />
          </Box>
        )}

        <CustomPagination
          currentPage={currentPage}
          pages={pages}
          onPageChange={(_: any, page: number) => setCurentPage(page)}
        />
      </Box>
    </Box>
  );
};

export default OrderPage;
