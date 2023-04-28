import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useMediaQuery, useTheme } from "@mui/material";

const Notifications = ({ children }: { children: JSX.Element }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {children}
      <ToastContainer position={isMobile ? "bottom-center" : "top-right"} />
    </>
  );
};

export default Notifications;
