import { useId } from "react";
import Image from "next/image";
import { useState } from "react";
import config from "config_dev";
import { Box, useTheme } from "@mui/material";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { toast } from "react-toastify";
import { useTranslated } from "@/lang/languageContext";

const ImageInput = ({
  value = "",
  onChange,
}: {
  value?: string;
  onChange: (value: string) => void;
}) => {
  const [fileInputKey, setFileInputKey] = useState(Date.now().toString());
  const id = useId();
  const theme = useTheme();
  const t = useTranslated();

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: string) => void
  ) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`${config.BASE_URL}/uploadImage`, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`Failed to upload image (status ${response.status})`);
      }
      const data = await response.json();
      onChange(data.data);
    } catch (error) {
      toast.error(t("ocurred_an_error_try_again"));
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleImageUpload(event, onChange);
    setFileInputKey(Date.now().toString());
  };

  return (
    <label htmlFor={id}>
      <Box
        width={200}
        height={200}
        position={"relative"}
        sx={{ cursor: "pointer" }}
      >
        <Image
          src={
            value ? `${config.PRODUCT_IMG_HOST}/${value}` : "/img_upload.png"
          }
          width={200}
          height={200}
          alt={"img"}
          style={{ background: "white" }}
        />
        {value && (
          <ChangeCircleIcon
            sx={{
              color: theme.palette.customColor.main,
              position: "absolute",
              fontSize: 60,
              top: 70,
              left: 70,
            }}
          />
        )}
      </Box>
      <input
        id={id}
        key={fileInputKey}
        onChange={handleInputChange}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
      />
    </label>
  );
};

export default ImageInput;
