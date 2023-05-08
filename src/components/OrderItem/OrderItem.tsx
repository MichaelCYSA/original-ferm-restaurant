import { IProduct } from '@/constants/products';
import { Translated } from '@/lang/languageContext';
import { useDeleteOrderMutation, useUpdateOrderMutation } from '@/store/api/orders';
import { IOrder } from '@/types/order.types';
import EditIcon from '@mui/icons-material/Edit';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Box, Collapse, IconButton, SelectChangeEvent, Typography, useTheme } from '@mui/material';
import moment from 'moment';
import { useEffect, useState } from 'react';

import CartItem from '../CartModal/cartItem';
import DeleteModal from '../DeleteModal/DeleteModal';
import EditOrderModal from '../EditOrderModal/EditOrderModal';
import CustomSelect from '../inputs/CustomSelect';
import OrderTimer from './OrderTimer';

export const OrderStatues = {
  0: "unconfirmed",
  1: "in_progress",
  2: "delivered",
  3: "canceled",
};
export const OrderStatuesColors = {
  0: "white",
  1: "orange",
  2: "green",
  3: "red",
};

export const orderOption = [
  {
    label: "unconfirmed",
    value: 0,
  },
  {
    label: "in_progress",
    value: 1,
  },
  {
    label: "delivered",
    value: 2,
  },
  {
    label: "canceled",
    value: 3,
  },
];

const OrderItem = ({ order }: { order: IOrder }) => {
  const [status, setStatus] = useState<any>();
  const [details, setDetails] = useState(false);
  const [isOpenEdit, setOpenEdit] = useState(false);
  const theme = useTheme();
  const [updatedMutation, { isLoading }] = useUpdateOrderMutation();
  const [deleteOrder, { isLoading: isDeleting }] = useDeleteOrderMutation();
  const handleUpdate = () => {
    updatedMutation({ id: order._id, data: { status } });
  };
  const handleDelete = () => {
    deleteOrder({ id: order._id });
  };
  const handleChangeStatus = (
    e: SelectChangeEvent<string | number | undefined | null>
  ) => setStatus(e.target.value as any);

  const toggleDetails = () => setDetails((prev) => !prev);
  const toggleEdit = () => setOpenEdit((prev) => !prev);

  useEffect(() => {
    if (status) {
      handleUpdate();
      setStatus(undefined);
    }
  }, [status]);

  return (
    <Box
      width={1}
      sx={{
        background: theme.palette.customColor.dark,
        padding: 2,
        borderRadius: "5px",
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDirection={{ xs: "column", md: "row" }}
        gap={{ xs: 2, md: 0 }}
        mb={2}
      >
        <Typography variant="h3" color={OrderStatuesColors[order.status || 0]}>
          <b style={{ color: "white" }}>{Translated("status")}</b> :{" "}
          {Translated(OrderStatues[order.status || 0])}
        </Typography>
        <Box display={"flex"} gap={2}>
          <IconButton
            onClick={toggleDetails}
            sx={{ background: theme.palette.customColor.main }}
          >
            <InfoOutlinedIcon />
          </IconButton>
          <IconButton
            onClick={toggleEdit}
            sx={{ background: theme.palette.customColor.main }}
          >
            <EditIcon />
          </IconButton>
          <DeleteModal isLoading={isDeleting} deleteFn={handleDelete} />
        </Box>
      </Box>
      <Box display={"flex"} flexWrap={{ xs: 'wrap', md: 'nowrap' }} gap={2}>
        <Box width={1}>
          <Typography variant="h3">
            {Translated("order_time")}: {moment(order.createdAt).format('HH:mm')}
          </Typography>
          <OrderTimer order={order} />
          <Typography variant="h3">
            {Translated("address")}: {order.city} {order.district}{" "}
            {order.street} {order.home} {order.block} {order.apartment}
          </Typography>
          <Typography variant="h3">
            {Translated("full_name")}: {order.first_name} {order.last_name}
          </Typography>
          <Typography
            variant="h3"
            component={"a"}
            href={`tel:+373${order.phone}`}
          >
            {Translated("phone")}: +373{order.phone}
          </Typography>
          <Typography variant="h3">
            {Translated("total_price")}: {order.totalPrice} MDL
          </Typography>
        </Box>
        <Box width={1}>
          <CustomSelect
            disabled={isLoading}
            label="status"
            value={status || order.status}
            onChange={handleChangeStatus}
            options={orderOption}
          />
        </Box>
      </Box>
      <Collapse in={details}>
        <Box mt={3} width={1} display={"flex"} flexDirection={"column"} gap={2}>
          {order.products?.map((product: IProduct, index: number) => {
            return (
              <CartItem
                item={product}
                key={`${product._id}-${index}`}
                redadOnly
                minus={() => { }}
                plus={() => { }}
              />
            );
          })}
        </Box>
      </Collapse>
      <EditOrderModal
        order={order}
        open={isOpenEdit}
        handleClose={toggleEdit}
      />
    </Box>
  );
};

export default OrderItem;
