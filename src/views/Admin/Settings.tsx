import { Box, Typography, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTranslated } from "@/lang/languageContext";
import { useChangePasswordMutation } from "@/store/api/auth";
import { toast } from "react-toastify";
import LoadingButton from "@/components/LoadingButton/LoadingButton";

const fields = [
  {
    label: "Email",
    name: "email",
    type: "email",
    rules: () => ({
      required: {
        value: true,
        message: "field_is_required",
      },
    }),
  },
  {
    label: "old_password",
    name: "old_password",
    rules: () => ({
      required: {
        value: true,
        message: "field_is_required",
      },
    }),
  },
  {
    label: "new_password",
    name: "new_password",
    rules: () => ({
      required: {
        value: true,
        message: "field_is_required",
      },
      pattern: {
        value: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+={[}\]|\\:;"'<,>.?/])(?=.*[a-z]).{8,}$/,
        message: 'password_is_weak'
      },
      minLength: {
        value: true,
        message: "max_lenght_8",
      },
    }),
  },
  {
    label: "repeated_new_password",
    name: "repeated_new_password",
    rules: (newPassword?: string) => ({
      required: {
        value: true,
        message: "field_is_required",
      },

      validate: (value: string) =>
        value === newPassword || "password_is_not_match",
    }),
  },
];
const Settings = () => {
  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const t = useTranslated();
  const [changePasswordRequest, { isLoading }] = useChangePasswordMutation();

  const handleChangePassword = (data: any) => {
    changePasswordRequest({ data }).then((res: any) => {
      if (res.error) {
        return toast.error(t("ocurred_an_error_try_again"));
      }
      reset({
        email: "",
        repeated_new_password: "",
        new_password: "",
        old_password: "",
      });
      return toast.success(t("password_was_changed"));
    });
  };

  return (
      <Box
        width={1}
        maxWidth={400}
        display={"flex"}
        flexDirection={"column"}
        gap={3}
      >
        <Typography variant="h3">{t("change_password")}</Typography>
        {fields.map((field) => (
          <TextField
            key={field.name}
            variant={"outlined"}
            type={field.type || "password"}
            label={t(field.label)}
            {...register(
              field.name,
              field.rules(watch("new_password"))
            )}
            error={Boolean(errors[field.name])}
            helperText={t((errors[field.name] as any)?.message)}
          />
        ))}

        <LoadingButton
          title={t("save")}
          onClick={handleSubmit(handleChangePassword)}
          isLoading={isLoading}
        />
      </Box>
  );
};

export default Settings;
