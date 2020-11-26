import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './Searchbar.css';

const Search = () => {
  const { setSearch } = useContext(AppContext);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <input
        onChange={handleSearch}
        type="text"
        placeholder="Search Medicines"
        className="search"
      />
    </div>
  );
};

export default Search;
