import { Product } from "@/constants/products";

export const getNewProductsArray = (
  products: Product[],
  newProduct: Product,
  minus = false
): Product[] => {
  const index = products.findIndex(item => item._id === newProduct._id);
  const updatedProducts = [...products];
  if (index !== -1) {
    updatedProducts[index] = {
      ...updatedProducts[index],
      count: Number(updatedProducts[index].count) + (minus ? -1 : 1)
    };
  } else {
    updatedProducts.push({ ...newProduct, count: 1 });
  }
  return updatedProducts;
};