import { Box, Typography, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTranslated } from "@/lang/languageContext";

const fields = [
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
      minLength: {
        value: true,
        message: 'max_lenght_8'
      }
    }),
  },
  {
    label: "repeated_new_password",
    name: "repeated_new_password",
    rules: (repeatedNewPassword?: string) => ({
      required: {
        value: true,
        message: "field_is_required",
      },
      
      validate: (value: string) =>
        value === repeatedNewPassword || "password_is_not_match",
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

  const handleChangePassword = (data: any) => {
    console.log(data);
    reset({
        repeated_new_password: '',
        new_password: '',
        old_password: ''
    });
  };
  return (
    <Box
      width={1}
      display={"flex"}
      height={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        width={1}
        maxWidth={400}
        display={"flex"}
        flexDirection={"column"}
        gap={3}
      >
        <Typography variant="h3">{t('change_password')}</Typography>
        {fields.map((field) => (
          <TextField
            variant={"outlined"}
            type={"password"}
            label={t(field.label)}
            {...register(
              field.name,
              field.rules(watch("repeated_new_password"))
            )}
            error={Boolean(errors[field.name])}
            helperText={t((errors[field.name] as any)?.message)}
          />
        ))}

        <Button
          variant="contained"
          onClick={handleSubmit(handleChangePassword)}
        >
          {t("save")}
        </Button>
      </Box>
    </Box>
  );
};

export default Settings;
