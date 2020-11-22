import React from "react";

const Search = () => {
  return (
    <form className="form-inline md-form form-sm mt-0">
      <i className="fas fa-search" aria-hidden="true"></i>
      <input
        className="form-control form-control-sm ml-3 w-100 m-3"
        type="text"
        placeholder="Search"
        aria-label="Search"
        value={terms}
      />
    </form>
  );
};

export default Search;
