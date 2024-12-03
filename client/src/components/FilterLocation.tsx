import { useContext } from "react";
import TypeContextLoc from "../contexts/FilterContextsLoc";
import FilterLoc from "./FilterIndexLoc";
import "./FilterBar.css";

function FiltersLoc() {
  const { selectedLoc, setSelectedLoc } = useContext(TypeContextLoc);

  const handleSelectLoc = (locName: string) => {
    if (locName === "") {
      setSelectedLoc(null);
    } else {
      const selected = FilterLoc.find((type) => type.loc === locName) || null;
      setSelectedLoc(selected);
    }
  };

  return (
    <select
      className="filterloc"
      name="selectedLoc"
      value={selectedLoc?.loc || ""}
      onChange={(e) => handleSelectLoc(e.target.value)}
    >
      <option value="">Toute les villes</option>
      {FilterLoc.map((type) => (
        <option key={type.id} value={type.loc}>
          {type.loc}
        </option>
      ))}
    </select>
  );
}

export default FiltersLoc;
