import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";

import List from "@mui/material/List";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { drawerWidth } from "./constants/layoutConstants";
import AdminAppBar from "./AdminAppBar";
import { menuItems } from "./constants/layoutConstants";
import { useAuth } from "@/hooks/useAuth";
import LogoutIcon from "@mui/icons-material/Logout";
import LayuotContainer from "@/components/Containers/LayuotContainer";
import { useRouter } from "next/router";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const AdminLayout = ({ children }: { children: JSX.Element }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { logOut } = useAuth();


  const router = useRouter()

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AdminAppBar handleDrawerOpen={handleDrawerOpen} open={open} />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem onClick={() => router.push(item.link)} key={item.title} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <item.icon sx={{ color: theme.palette.customColor.main }} />
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding onClick={logOut}>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon sx={{ color: theme.palette.customColor.main }} />
              </ListItemIcon>
              <ListItemText primary={"Log out"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Main sx={{ mt: 8, background: 'black' }} open={open}>
        <LayuotContainer>
          <>{children}</>
        </LayuotContainer>
      </Main>
    </Box>
  );
};

export default AdminLayout;
