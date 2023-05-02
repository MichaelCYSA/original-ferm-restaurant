import * as React from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import Backdrop from "@mui/material/Backdrop";
import { TransitionProps } from "@mui/material/transitions";
import { useMediaQuery, useTheme } from "@mui/material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IFullScreenModalWrapper {
  handleClose: () => void;
  open: boolean;
  children: React.ReactElement;
}

const FullScreenModalWrapper = ({
  handleClose,
  open,
  children,
}: IFullScreenModalWrapper) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      fullScreen={isMobile}
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      BackdropComponent={Backdrop}
      BackdropProps={{
        sx: {
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(5px)",
          width: "100%",
        },
        timeout: 100,
      }}
    >
      <Box
        sx={{ background: theme.palette.customColor.dark }}
        width={1}
        padding={"12px 24px 24px"}
        maxWidth={!isMobile ? "600px" : "100%"}
        minHeight={!isMobile ? undefined : `${window?.innerHeight}`}
      >
        <Box
          width={1}
          display={"flex"}
          justifyContent={"flex-end"}
          height={"40px"}
          alignItems={"center"}
          mb={4}
        >
          <IconButton
            sx={{ width: "25px", height: "25px" }}
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon sx={{ color: theme.palette.customColor.main }} />
          </IconButton>
        </Box>
        <Box width={1}>{children}</Box>
      </Box>
    </Dialog>
  );
};

export default FullScreenModalWrapper;
