export interface IndexTypeLoc {
  id: string;
  loc: string;
  url: string;
}
export interface LocListResponse {
  id: number;
  loc: IndexTypeLoc[];
}

const FilterLoc: IndexTypeLoc[] = [
  {
    id: "1",
    loc: "Paris",
    url: "https://api-re-connect-t3ln.vercel.app/api/resources/location/Paris",
  },
  {
    id: "2",
    loc: "Lyon",
    url: "https://api-re-connect-t3ln.vercel.app/api/resources/location/Lyon",
  },
  {
    id: "3",
    loc: "Nice",
    url: "https://api-re-connect-t3ln.vercel.app/api/resources/location/Nice",
  },
  {
    id: "4",
    loc: "Aix-en-provence",
    url: "https://api-re-connect-t3ln.vercel.app/api/resources/location/Aix-en-provence",
  },
  {
    id: "5",
    loc: "Toulouse",
    url: "https://api-re-connect-t3ln.vercel.app/api/resources/location/Toulouse",
  },
  {
    id: "6",
    loc: "Bordeaux",
    url: "https://api-re-connect-t3ln.vercel.app/api/resources/location/Bordeaux",
  },
  {
    id: "7",
    loc: "Dijon",
    url: "https://api-re-connect-t3ln.vercel.app/api/resources/location/Dijon",
  },
  {
    id: "8",
    loc: "Orléans",
    url: "https://api-re-connect-t3ln.vercel.app/api/resources/location/Orléans",
  },
  {
    id: "9",
    loc: "Nancy",
    url: "https://api-re-connect-t3ln.vercel.app/api/resources/location/Nancy",
  },
  {
    id: "10",
    loc: "Nantes",
    url: "https://api-re-connect-t3ln.vercel.app/api/resources/location/Nantes",
  },
  {
    id: "10",
    loc: "Strasbourg",
    url: "https://api-re-connect-t3ln.vercel.app/api/resources/location/Strasbourg",
  },
  {
    id: "10",
    loc: "Tours",
    url: "https://api-re-connect-t3ln.vercel.app/api/resources/location/Tours",
  },
];

export default FilterLoc;
