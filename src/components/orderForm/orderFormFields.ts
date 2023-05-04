import { OrderFields } from "@/types/order.types";

export const orderFormFields = [
  {
    name: OrderFields.firstName,
    label: "first_name",
    rules: {
      required: {
        message: "field_is_required",
        value: true,
      },
      minLength: {
        message: "min_lenght_2",
        value: 2,
      },
      maxLength: {
        message: "max_lenght_10",
        value: 10,
      },
    },
  },
  {
    name: OrderFields.lastName,
    label: "last_name",
    rules: {
      required: {
        message: "field_is_required",
        value: true,
      },
      minLength: {
        message: "min_lenght_2",
        value: 2,
      },
      maxLength: {
        message: "max_lenght_10",
        value: 10,
      },
    },
  },
  {
    name: OrderFields.city,
    type: "select",
    label: "city",
    menuItems: [
      {
        label: "Chișinău",
        value: "Chișinău",
      },
      {
        label: "Codru",
        value: "Codru",
      },
    ],
    rules: {
      required: {
        message: "field_is_required",
        value: true,
      },
    },
  },
  {
    name: OrderFields.district,
    label: "district",
    rules: {
      required: {
        message: "field_is_required",
        value: true,
      },
      maxLength: {
        message: "max_lenght_16",
        value: 16,
      },
    },
  },
  {
    name: OrderFields.street,
    label: "street",
    rules: {
      required: {
        message: "field_is_required",
        value: true,
      },
      maxLength: {
        message: "max_lenght_20",
        value: 20,
      },
    },
  },
  {
    name: OrderFields.home,
    label: "home",
    rules: {
      required: {
        message: "field_is_required",
        value: true,
      },
      maxLength: {
        message: "max_lenght_6",
        value: 6,
      },
    },
  },
  {
    name: OrderFields.block,
    label: "block",
    rules: {
      maxLength: {
        message: "max_lenght_6",
        value: 6,
      },
    },
  },
  {
    name: OrderFields.apartment,
    label: "apartment",
    rules: {
      maxLength: {
        message: "max_lenght_6",
        value: 6,
      },
    },
  },
  {
    name: OrderFields.phone,
    label: "phone",
    rules: {
      required: {
        message: "field_is_required",
        value: true,
      },
      pattern: { 
        message: "invalid_phone_number",
        value: /^[1-9]\d{7}$/
      }
    },
  },
];
