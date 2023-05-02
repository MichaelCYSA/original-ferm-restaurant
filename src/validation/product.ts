export const validationProdcut = {
  description: {
    maxLenght: {
      message: "max_120_characters",
      value: 120,
    },
    required: {
      message: "field_is_required",
      value: true,
    },
  },
  name: {
    maxLenght: {
      message: "max_50_characters",
      value: 50,
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
