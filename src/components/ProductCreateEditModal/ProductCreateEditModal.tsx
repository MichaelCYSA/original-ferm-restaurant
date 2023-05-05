import FullScreenModalWrapper from "../fullScreenModalWrapper/fullScreenModalWrapper";
import { IProduct } from "@/constants/products";
import { useForm } from "react-hook-form";
import SelectInput from "../inputs/SelectInput";
import { TextField, Grid } from "@mui/material";
import { productCatagories, suplimentar } from "@/constants/products";
import { useEffect } from "react";
import ImageInput from "../ImageInput/ImageInput";
import {
  useUpdateProductMutation,
  useCreateProductMutation,
} from "@/store/api/product";
import LoadingButton from "../LoadingButton/LoadingButton";
import { validationProdcut } from "@/validation/product";
import { toast } from "react-toastify";
import { useTranslated } from "@/lang/languageContext";

const ProductCreateEditModal = ({
  handleClose,
  open,
  data,
}: {
  open: boolean;
  handleClose: () => void;
  data?: IProduct;
}) => {
  const {
    handleSubmit,
    register,
    control,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IProduct>({
    defaultValues: data,
  });

  const useRequest: any = !data?._id
    ? useCreateProductMutation
    : useUpdateProductMutation;

  const [productUpdateOrEdit, { isLoading }] = useRequest();
  const t = useTranslated();

  const handleImage = (image: string) => {
    setValue("image", image);
  };

  const handleChanges = (data: IProduct) => {
    productUpdateOrEdit({ data, id: data?._id }).then((res: any) => {
      if (res.error) {
        return toast.error(t("ocurred_an_error_try_again"));
      }
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
          <TextField
            label={t("name_ro")}
            fullWidth
            {...register("name.ro", validationProdcut.name)}
            error={Boolean(errors["name"]?.ro)}
            helperText={t(errors["name"]?.ro?.message)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label={t("name_ru")}
            fullWidth
            {...register("name.ru", validationProdcut.name)}
            error={Boolean(errors["name"]?.ru)}
            helperText={t(errors["name"]?.ru?.message)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label={t("description_ro")}
            fullWidth
            {...register("description.ro", validationProdcut.description)}
            multiline
            rows={5}
            error={Boolean(errors["description"]?.ro)}
            helperText={t(errors["description"]?.ro?.message)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label={t("description_ru")}
            fullWidth
            {...register("description.ru", validationProdcut.description)}
            multiline
            rows={5}
            error={Boolean(errors["description"]?.ru)}
            helperText={t(errors["description"]?.ru?.message)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label={t("price")}
            fullWidth
            {...register("price", validationProdcut.price)}
            error={Boolean(errors.price)}
            helperText={t(errors.price?.message)}
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
            options={[...productCatagories, ...suplimentar]}
            error={errors.productType}
            rules={validationProdcut.productType}
          />
        </Grid>
        <Grid item xs={12}>
          <LoadingButton
            disabled={!!Object.keys(errors).length}
            onClick={handleSubmit(handleChanges)}
            variant="contained"
            isLoading={isLoading}
            title={t("save")}
          />
        </Grid>
      </Grid>
    </FullScreenModalWrapper>
  );
};

export default ProductCreateEditModal;
