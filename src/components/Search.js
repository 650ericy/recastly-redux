import React, { useState } from 'react';


function Search({ handleSearchInputChange }) {
  const [value, setValue] = useState("")

  const handleInputChange = (e) => {
    handleSearchInputChange(e.target.value);
    setValue(e.target.value)
  }

  return (
    <div className="search-bar form-inline">
      <input
        className="form-control"
        type="text"
        value={value}
        onChange={handleInputChange}
      />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );

}

export default Search;
