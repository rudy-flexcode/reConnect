import { createContext } from "react";
import type { IndexType } from "../components/FilterIndex";

const TypeContext = createContext<{
  selectedType: IndexType | null;
  setSelectedType: React.Dispatch<React.SetStateAction<IndexType | null>>;
}>({
  selectedType: null,
  setSelectedType: () => {},
});

export default TypeContext;
