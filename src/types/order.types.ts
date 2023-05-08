type StatusTypes = 0 | 1 | 2 | 3;
export type Products = {
  [field: string]: number;
};

export enum OrderFields {
  firstName = "first_name",
  lastName = "last_name",
  city = "city",
  district = "district",
  street = "street",
  home = "home",
  block = "block",
  apartment = "apartment",
  status = "status",
  totalPrice = "totalPrice",
  products = "products",
  phone = "phone"
}

export interface IOrder {
  _id?: string;
  [OrderFields.firstName]: string;
  [OrderFields.lastName]: string;
  [OrderFields.city]: string;
  [OrderFields.district]: string;
  [OrderFields.street]: string;
  [OrderFields.home]: string;
  [OrderFields.block]: string;
  [OrderFields.apartment]: string;
  [OrderFields.status]: StatusTypes;
  [OrderFields.totalPrice]: number;
  [OrderFields.phone]: string;
  [OrderFields.products]: any;
  createdAt?: string; 
}

export const orderDefaultValues: IOrder = {
  [OrderFields.firstName]: "",
  [OrderFields.lastName]: "",
  [OrderFields.city]: "",
  [OrderFields.district]: "",
  [OrderFields.street]: "",
  [OrderFields.home]: "",
  [OrderFields.block]: "",
  [OrderFields.apartment]: "",
  [OrderFields.status]: 0,
  [OrderFields.totalPrice]: 0,
  [OrderFields.products]: {},
  [OrderFields.phone]: ''
};
