export const validationProdcut = {
  description: {
    maxLength: {
      message: "max_80_characters",
      value: 80,
    },
    // required: {
    //   message: "field_is_required",
    //   value: true,
    // },
  },
  name: {
    maxLength: {
      message: "max_40_characters",
      value: 40,
    },
    required: {
      message: "field_is_required",
      value: true,
    },
  },
  price: {
    valueAsNumber: true,
    required: {
      message: "field_is_required",
      value: true,
    },
  },
  productType: {
    required: {
      message: "field_is_required",
      value: true,
    },
  },
};
