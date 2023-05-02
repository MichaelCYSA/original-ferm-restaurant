import FullScreenModalWrapper from "../fullScreenModalWrapper/fullScreenModalWrapper";
import { IProduct } from "@/constants/products";
import { useForm } from "react-hook-form";
import SelectInput from "../inputs/SelectInput";
import { TextField, Grid } from "@mui/material";
import { productCatagories } from "@/constants/products";
import { useEffect } from "react";
import ImageInput from "../ImageInput/ImageInput";
import {
  useUpdateProductMutation,
  useCreateProductMutation,
} from "@/store/api/product";
import LoadingButton from "../LoadingButton/LoadingButton";

const ProductCreateEditModal = ({
  handleClose,
  open,
  data,
}: {
  open: boolean;
  handleClose: () => void;
  data?: IProduct;
}) => {
  const { handleSubmit, register, control, reset, setValue, watch } =
    useForm<IProduct>({
      defaultValues: data || {image: '342324ad'},
    });

  const useRequest = !data?._id
    ? useCreateProductMutation
    : useUpdateProductMutation;

  const [productUpdateOrEdit, { isLoading }] = useRequest();

  const handleImage = (image: string) => {
    setValue("image", image);
  };

  const handleChanges = (data: IProduct) => {
    productUpdateOrEdit({ data, id: data?._id }).then(() => {
      handleClose();
      reset();
    });
  };
  useEffect(() => {
    reset(data);
  }, [data]);

  return (
    <FullScreenModalWrapper handleClose={handleClose} open={open}>
      <Grid container spacing={3}>
        <Grid item xs={12} display={"flex"} justifyContent={"center"}>
          <ImageInput value={watch("image")} onChange={handleImage} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label={"Name ro"} fullWidth {...register("name.ro")} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label={"Name ru"} fullWidth {...register("name.ru")} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label={"Description ro"}
            fullWidth
            {...register("description.ro")}
            multiline
            rows={5}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label={"Description ru"}
            fullWidth
            {...register("description.ru")}
            multiline
            rows={5}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label={"Price"}
            fullWidth
            {...register("price", { valueAsNumber: true })}
            type={"number"}
            inputProps={{
              step: 0.1,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <SelectInput
            control={control}
            label={"Product type"}
            name={"productType"}
            options={productCatagories}
          />
        </Grid>
        <Grid item xs={12}>
          <LoadingButton
            onClick={handleSubmit(handleChanges)}
            variant="contained"
            isLoading={isLoading}
            title="Save"
          />
        </Grid>
      </Grid>
    </FullScreenModalWrapper>
  );
};

export default ProductCreateEditModal;
