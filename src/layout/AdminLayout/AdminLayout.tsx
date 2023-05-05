import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

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

  const router = useRouter();

  return (
    <Box sx={{ display: "flex" }} width={1}>
      <AdminAppBar handleDrawerOpen={handleDrawerOpen} open={open} />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            //boxSizing: "border-box",
          },
        }}
        //  variant="persistent"
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
          {menuItems.map((item, index) => (
            <ListItem
              onClick={() => router.push(item.link)}
              key={`${item.title}-${index}`}
              disablePadding
            >
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

      <Box
        width={1}
        pt={10}
        pb={6}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        pl={2}
        pr={2}
        maxWidth={"1126px"}
        m={"0 auto"}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AdminLayout;
