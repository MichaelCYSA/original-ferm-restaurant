import { useForm } from "react-hook-form";
import { Grid, TextField, Box, Typography, Button } from "@mui/material";
import LoadingButton from "../LoadingButton/LoadingButton";
import { IOrder, Products, orderDefaultValues } from "@/types/order.types";
import { Translated } from "@/lang/languageContext";
import { orderFormFields } from "./orderFormFields";
import InputSelect from "../inputs/SelectInput";
import { useCartContext } from "@/contexts/cartContext";
import Cart from "../CartModal/cart";
import {
  useCreateOrderMutation,
  useUpdateOrderMutation,
} from "@/store/api/orders";
import { useState } from "react";
import { toast } from "react-toastify";
import { useTranslated } from "@/lang/languageContext";

const OrderForm = ({
  order,
  closeModal,
}: {
  order?: IOrder;
  closeModal?: () => void;
}) => {
  const [isCreated, setIsCreated] = useState(false);
  const {
    handleSubmit,
    reset,
    register,
    control,
    formState: { errors },
  } = useForm<IOrder>({
    defaultValues: order || orderDefaultValues,
  });

  const { totalPrice, cart, clearCart } = useCartContext();

  const useRequest = !order ? useCreateOrderMutation : useUpdateOrderMutation;
  const [requestFunction, { isLoading }] = useRequest();
  const t = useTranslated();

  const handleCreateOrder = (data: IOrder) => {
    const orderedProducts: Products = {};

    cart.map((product: any) => {
      orderedProducts[product._id] = Number(product.count);
    });
    console.log({ orderedProducts });

    requestFunction({
      data: { ...data, totalPrice, orderedProducts },
      id: order?._id,
    }).then((res: any) => {
      if (res.error) {
        return toast.error(t("ocurred_an_error_try_again"));
      }
      if (closeModal) {
        return closeModal();
      }
      setIsCreated(true);
      clearCart();
      reset({ ...orderDefaultValues });
    });
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
                    rules={field.rules}
                    error={errors[field.name]}
                  />
                </Grid>
              );
            }
            return (
              <Grid item key={field.name} xs={12} md={6}>
                <TextField
                  label={Translated(field.label)}
                  {...register(field.name, field.rules)}
                  fullWidth
                  variant="outlined"
                  helperText={(errors as any)[field.name]?.message}
                  error={Boolean((errors as any)[field.name])}
                />
              </Grid>
            );
          })}
        </Grid>
        {!order && <Cart isForm={true} />}
        <Box>
          <LoadingButton
            disabled={!!Object.keys(errors).length}
            onClick={handleSubmit(handleCreateOrder)}
            title={t(!order ? "create_order" : "update_order")}
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
