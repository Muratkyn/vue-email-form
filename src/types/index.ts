export type CustomerData = {
  customerName: string;
  customerLastName: string;
  customerEmail: string;
  customerZipCode: string;
};

export type CustomerRequest = {
  productOrder: string;
  productReturn: string;
  productItem: string;
};

export type RequestType = {
  productOrder: string;
  productReturn: string;
  productItem: string;
};

export type Options = {
  name: string;
  label: string;
  value: string;
};
