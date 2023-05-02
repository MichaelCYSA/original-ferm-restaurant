export const drawerWidth = 240;
import RestaurantIcon from "@mui/icons-material/Restaurant";
import HomeIcon from "@mui/icons-material/Home";
import StorefrontIcon from "@mui/icons-material/Storefront";

export const menuItems = [
  {
    icon: HomeIcon,
    title: "Home page",
    link: "/admin",
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
];
