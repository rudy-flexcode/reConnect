import { useContext } from "react";
import TypeContext from "../contexts/FilterContexts";
import Filter from "./FilterIndex";
import "./FilterBar.css";

function Filters() {
  const { selectedType, setSelectedType } = useContext(TypeContext);

  const handleSelectType = (typeName: string) => {
    if (typeName === "") {
      setSelectedType(null);
    } else {
      const selected = Filter.find((type) => type.name === typeName) || null;
      setSelectedType(selected);
    }
  };

  return (
    <select
      className="filter-selector"
      name="selectedType"
      value={selectedType?.name}
      onChange={(e) => handleSelectType(e.target.value)}
    >
      <option value="">Toute les ressources</option>
      {Filter.map((type) => (
        <option key={type.id} value={type.name}>
          {type.name}
        </option>
      ))}
    </select>
  );
}

export default Filters;
