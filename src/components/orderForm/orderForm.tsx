import { useForm } from "react-hook-form";
import { Grid, TextField, Box } from "@mui/material";
import LoadingButton from "../LoadingButton/LoadingButton";
import { IOrder, orderDefaultValues } from "@/types/order.types";
import { Translated } from "@/lang/languageContext";
import { orderFormFields } from "./orderFormFields";
import InputSelect from "../inputs/SelectInput";
import { useCartContext } from "@/contexts/cartContext";
import Cart from "../CartModal/cart";

const OrderForm = ({ order }: { order?: IOrder }) => {
  const { handleSubmit, reset, register, control } = useForm<IOrder>({
    defaultValues: order || orderDefaultValues,
  });

  const { totalPrice, cart } = useCartContext();

  return (
    <Box mt={10} mb={10} width={1} display={"flex"} flexDirection={"column"} gap={8}>
      <Grid container spacing={3}>
        {orderFormFields.map((field) => {
          if (field.type === "select") {
            return (
              <Grid item key={field.name} xs={12} md={6}>
                <InputSelect
                  control={control}
                  label={field.label}
                  name={field.name}
                  options={field.menuItems}
                />
              </Grid>
            );
          }
          return (
            <Grid item key={field.name} xs={12} md={6}>
              <TextField
                label={Translated(field.label)}
                {...register(field.name)}
                fullWidth
                variant="outlined"
              />
            </Grid>
          );
        })}
      </Grid>
      <Cart isForm={true}/>
      <Box>
        <LoadingButton title="Create order" isLoading={false} />
      </Box>
    </Box>
  );
};

export default OrderForm;
