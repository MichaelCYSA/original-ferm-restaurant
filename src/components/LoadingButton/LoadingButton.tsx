import { ButtonProps, Button, CircularProgress } from "@mui/material";

export interface ILoadingButton extends ButtonProps {
  title?: string;
  isLoading: boolean;
  progressColor?: string;
}

const LoadingButton = (props: ILoadingButton) => {
  const { isLoading = false, title = "", progressColor = "white" } = props;
  return (
    <Button {...props}>
      {isLoading ? <CircularProgress sx={{ color: progressColor }} /> : title}
    </Button>
  );
};

export default LoadingButton;
