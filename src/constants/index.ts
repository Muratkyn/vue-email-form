export const customerData = [
  {
    name: "customerName",
    label: "Nome",
  },
  {
    name: "customerLastName",
    label: "Cognome",
  },
  {
    name: "customerEmail",
    label: "Indirizzo email",
  },
  {
    name: "customerZipCode",
    label: "Il tuo CAP",
  },
];

export const customerRequest = {
  name: "customerRequestDetails",
  label1: "Tipo di richiesta",
  label2: "Specifica",
  label3: "Negozio Preferito",
  selections: [
    {
      name: "productOrder",
      label: "Ordine",
      value: "10",
      options: [
        {
          name: "infoOrder",
          label: "Informazioni stato ordine",
          value: "11",
        },
        {
          name: "cancelOrder",
          label: "Annullo Ordine",
          value: "12",
        },
        {
          name: "reportOrder",
          label: "Segnalazioni",
          value: "13",
        },
      ],
    },
    {
      name: "productReturn",
      label: "Reso",
      value: "20",
      options: [
        {
          name: "infoReturn",
          label: "Informazioni",
          value: "21",
        },
        {
          name: "onlineReturn",
          label: "Pratica di reso online",
          value: "22",
        },
        {
          name: "reportReturn",
          label: "Segnalazione",
          value: "23",
        },
      ],
    },
    {
      name: "productItem",
      label: "Prodotto",
      value: "30",
      options: [
        {
          name: "infoProduct",
          label: "Informazioni",
          value: "31",
        },
        {
          name: "reportProduct",
          label: "Segnalazioni",
          value: "32",
        },
        {
          name: "otherProduct",
          label: "Altro",
          value: "33",
        },
      ],
    },
  ],
};

export const preferredStore = [
  {
    name: "Ancona",
    value: "90",
  },
  {
    name: "Bologna",
    value: "34",
  },
  {
    name: "Milano",
    value: "51",
  },
  {
    name: "Roma",
    value: "66",
  },
];
