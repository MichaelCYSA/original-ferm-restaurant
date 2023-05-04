import RestaurantIcon from "@mui/icons-material/Restaurant";
import HomeIcon from "@mui/icons-material/Home";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

export const drawerWidth = 240;

export const menuItems = [
  {
    icon: HomeIcon,
    title: "Home page",
    link: "/admin",
  },
  {
    icon: RestaurantMenuIcon,
    title: "Menu",
    link: "/",
  },
  {
    icon: RestaurantIcon,
    title: "Products",
    link: "/admin/products",
  },
  {
    icon: StorefrontIcon,
    title: "Orders",
    link: "/admin/orders",
  },
  {
    icon: SettingsApplicationsIcon,
    title: "Settings",
    link: "/admin/settings",
  },
];
