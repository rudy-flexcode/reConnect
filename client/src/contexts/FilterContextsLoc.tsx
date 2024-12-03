import { createContext } from "react";
import type { IndexTypeLoc } from "../components/FilterIndexLoc";

const TypeContextLoc = createContext<{
  selectedLoc: IndexTypeLoc | null;
  setSelectedLoc: React.Dispatch<React.SetStateAction<IndexTypeLoc | null>>;
}>({
  selectedLoc: null,
  setSelectedLoc: () => {},
});

export default TypeContextLoc;
