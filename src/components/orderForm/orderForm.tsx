import { useForm } from "react-hook-form";
import { Grid, TextField, Box, Typography, Button } from "@mui/material";
import LoadingButton from "../LoadingButton/LoadingButton";
import { IOrder, Products, orderDefaultValues } from "@/types/order.types";
import { Translated } from "@/lang/languageContext";
import { orderFormFields } from "./orderFormFields";
import InputSelect from "../inputs/SelectInput";
import { useCartContext } from "@/contexts/cartContext";
import Cart from "../CartModal/cart";
import { useCreateOrderMutation } from "@/store/api/orders";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNotify } from "@/hooks/useNotify";

const OrderForm = ({ order }: { order?: IOrder }) => {
  const [isCreated, setIsCreated] = useState(false);
  const { handleSubmit, reset, register, control } = useForm<IOrder>({
    defaultValues: order || orderDefaultValues,
  });

  const { totalPrice, cart } = useCartContext();

  const [createOrder, { isLoading }] = useCreateOrderMutation();

  const handleCreateOrder = (data: IOrder) => {
    const products: Products = {};

    cart.map((product: any) => {
      product[product._id] = Number(product.count);
    });

    createOrder({ data: { ...data, totalPrice, products } }).then(
      (res: any) => {
        if (res.error) {
          return toast.error("ocurred_an_error_try_again");
        }
        setIsCreated(true);
        reset({ ...orderDefaultValues });
      }
    );
  };

  if (isCreated) {
    <FormContainer justifyContent={"center"}>
      <>
        <Typography variant="h3">
          {Translated("your_order_was_creted")}
        </Typography>
        <Button>{Translated("return_to_main")}</Button>
      </>
    </FormContainer>;
  }
  return (
    <FormContainer>
      <>
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
        <Cart isForm={true} />
        <Box>
          <LoadingButton
            onClick={handleSubmit(handleCreateOrder)}
            title="Create order"
            sx={{ width: "175px", height: "50px" }}
            isLoading={isLoading}
          />
        </Box>
      </>
    </FormContainer>
  );
};

export default OrderForm;

const FormContainer = ({
  children,
  justifyContent,
}: {
  children: JSX.Element;
  justifyContent?: string;
}) => {
  return (
    <Box
      mt={10}
      mb={10}
      width={1}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={justifyContent}
      gap={8}
    >
      {children}
    </Box>
  );
};
