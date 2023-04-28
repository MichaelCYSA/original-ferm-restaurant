import { OrderFields } from "@/types/order.types";

export const orderFormFields = [
  {
    name: OrderFields.firstName,
    label: "first_name",
  },
  {
    name: OrderFields.lastName,
    label: "last_name",
  },
  {
    name: OrderFields.city,
    type: "select",
    label: "city",
    menuItems: [
      {
        label: "chisinau",
        value: "chisinau",
      },
    ],
  },
  {
    name: OrderFields.district,
    label: "district",
  },
  {
    name: OrderFields.street,
    label: "street",
  },
  {
    name: OrderFields.home,
    label: "home",
  },
  {
    name: OrderFields.block,
    label: "block",
  },
  {
    name: OrderFields.apartment,
    label: "apartment",
  },
];
