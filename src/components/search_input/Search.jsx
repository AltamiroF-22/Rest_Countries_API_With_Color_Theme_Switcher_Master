/* eslint-disable react/prop-types */
import "./Search.sass";

import { FaSearch } from "react-icons/fa";

const Search = ({ type, placeholder, onChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <FaSearch />{" "}
      <input type={type} placeholder={placeholder} onChange={onChange} />
    </form>
  );
};

export default Search;
