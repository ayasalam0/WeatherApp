import React, { useEffect, useState } from "react";
import API_URL from "../constants";

function Filter({ onSearchLocation, onUpdateSearch }) {
  const handleLocationChange = (event) => onUpdateSearch(event.target.value);

  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder="Search..."
        onChange={handleLocationChange}
      />
      <button className="btn" onClick={onSearchLocation}>
        Search
      </button>
    </div>
  );
}

export default Filter;
