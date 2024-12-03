export interface IndexType {
  id: string;
  name: string;
  url: string;
}
export interface TypeListResponse {
  id: number;
  name: IndexType[];
}

const Filter: IndexType[] = [
  {
    id: "1",
    name: "Biens",
    url: "https://api-re-connect-t3ln.vercel.app/api/resources/category/bien",
  },
  {
    id: "2",
    name: "Services",
    url: "https://api-re-connect-t3ln.vercel.app/api/resources/category/services",
  },
];

export default Filter;
