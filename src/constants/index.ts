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

export const entities = [
  {
    id: "1",
    publicName: "Varese Solbiate Arno",
    emailSuffix: "solbiate",
  },
  {
    id: "2",
    publicName: "Brescia",
    emailSuffix: "brescia",
  },
  {
    id: "3",
    publicName: "Firenze Campi Bisenzio",
    emailSuffix: "firenze",
  },
  {
    id: "4",
    publicName: "Bari Casamassima",
    emailSuffix: "bari",
  },
  {
    id: "5",
    publicName: "Torino Moncalieri",
    emailSuffix: "moncalieri",
  },
  {
    id: "6",
    publicName: "Venezia Marghera",
    emailSuffix: "mestre",
  },
  {
    id: "7",
    publicName: "Milano Pantigliate",
    emailSuffix: "pantigliate",
  },
  {
    id: "8",
    publicName: "Roma Ciampino",
    emailSuffix: "ciampino",
  },
  {
    id: "9",
    publicName: "Bologna",
    emailSuffix: "bologna",
  },
  {
    id: "10",
    publicName: "Bergamo Curno",
    emailSuffix: "curno",
  },
  {
    id: "11",
    publicName: "Roma Laurentina",
    emailSuffix: "laurentina",
  },
  {
    id: "12",
    publicName: "Napoli Afragola",
    emailSuffix: "afragola",
  },
  {
    id: "13",
    publicName: "Roma Porta di Roma",
    emailSuffix: "portadiroma",
  },
  {
    id: "14",
    publicName: "Milano Caponago",
    emailSuffix: "agrate",
  },
  {
    id: "15",
    publicName: "Napoli Giugliano",
    emailSuffix: "giugliano",
  },
  {
    id: "16",
    publicName: "Milano Lissone",
    emailSuffix: "lissone",
  },
  {
    id: "18",
    publicName: "Roma Fiumicino",
    emailSuffix: "fiumicino",
  },
  {
    id: "19",
    publicName: "Milano Rozzano",
    emailSuffix: "rozzano",
  },
  {
    id: "21",
    publicName: "Brindisi Mesagne",
    emailSuffix: "mesagne",
  },
  {
    id: "22",
    publicName: "Milano Assago",
    emailSuffix: "assago",
  },
  {
    id: "23",
    publicName: "Roma Tiburtina",
    emailSuffix: "tiburtina",
  },
  {
    id: "24",
    publicName: "Catania Belpasso",
    emailSuffix: "catania",
  },
  {
    id: "25",
    publicName: "Verona San Giovanni Lupatoto",
    emailSuffix: "verona",
  },
  {
    id: "26",
    publicName: "Bari S.Caterina",
    emailSuffix: "barisc",
  },
  {
    id: "27",
    publicName: "Chieti S.Giovanni Teatino",
    emailSuffix: "pescara",
  },
  {
    id: "28",
    publicName: "Rimini Savignano sul Rubicone",
    emailSuffix: "rimini",
  },
  {
    id: "29",
    publicName: "Pavia Torrazza Coste",
    emailSuffix: "pavia",
  },
  {
    id: "30",
    publicName: "Treviso Olmi",
    emailSuffix: "treviso",
  },
  {
    id: "31",
    publicName: "Torino Collegno",
    emailSuffix: "collegno",
  },
  {
    id: "32",
    publicName: "Genova",
    emailSuffix: "genova",
  },
  {
    id: "33",
    publicName: "Livorno",
    emailSuffix: "livorno",
  },
  {
    id: "34",
    publicName: "Venezia Marcon",
    emailSuffix: "marcon",
  },
  {
    id: "35",
    publicName: "Milano Corsico",
    emailSuffix: "corsico",
  },
  {
    id: "36",
    publicName: "Milano Baranzate",
    emailSuffix: "bollate",
  },
  {
    id: "37",
    publicName: "Milano Nova Milanese",
    emailSuffix: "nova",
  },
  {
    id: "38",
    publicName: "Bologna Casalecchio di Reno",
    emailSuffix: "casalecchio",
  },
  {
    id: "40",
    publicName: "Roma La Romanina",
    emailSuffix: "romanina",
  },
  {
    id: "41",
    publicName: "Bergamo Seriate",
    emailSuffix: "seriate",
  },
  {
    id: "42",
    publicName: "Piacenza",
    emailSuffix: "piacenza",
  },
  {
    id: "43",
    publicName: "Milano Carugate",
    emailSuffix: "carugate",
  },
  {
    id: "47",
    publicName: "Perugia Bastia Umbra",
    emailSuffix: "perugia",
  },
  {
    id: "48",
    publicName: "Milano Busnago",
    emailSuffix: "busnago",
  },
  {
    id: "49",
    publicName: "Palermo Mondello",
    emailSuffix: "palermomondello",
  },
  {
    id: "50",
    publicName: "Palermo Forum",
    emailSuffix: "palermoforum",
  },
  {
    id: "51",
    publicName: "Vicenza Torri di Quartesolo",
    emailSuffix: "vicenza",
  },
  {
    id: "52",
    publicName: "Udine",
    emailSuffix: "udine",
  },
  {
    id: "54",
    publicName: "Napoli Torre Annunziata",
    emailSuffix: "torreannunziata",
  },
  {
    id: "55",
    publicName: "Torino Giulio Cesare",
    emailSuffix: "torinogc",
  },
  {
    id: "57",
    publicName: "Roma Salaria",
    emailSuffix: "romasalaria",
  },
  {
    id: "58",
    publicName: "Ancona",
    emailSuffix: "ancona",
  },
  {
    id: "59",
    publicName: "Catania Fontanarossa",
    emailSuffix: "cataniafontanarossa",
  },
  {
    id: "60",
    publicName: "Cagliari",
    emailSuffix: "cagliari",
  },
  {
    id: "705",
    publicName: "Roma Magliana - Porte e Finestre",
    emailSuffix: "magliana",
  },
  {
    id: "706",
    publicName: "Milano Piave - Showroom Bagno",
    emailSuffix: "milanopiave",
  },
  {
    id: "707",
    publicName: "Firenze - Showroom Casa",
    emailSuffix: "firenze",
  },
  {
    id: "709",
    publicName: "Trapani",
    emailSuffix: "palermomondello",
  },
];
