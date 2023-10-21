/* eslint-disable react/prop-types */
import "./Filter.sass";

const Filter = ({ onFilterChange, value }) => {
  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    onFilterChange(selectedValue);
  };

  return (
    <select className="filter" onChange={handleSelectChange} value={value}>
      <option value="" >
        All
      </option>
      <option value="Asia">Asia</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default Filter;
