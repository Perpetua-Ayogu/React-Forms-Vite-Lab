
import React from "react";

function Filter({
  search,
  selectedCategory,
  onSearchChange,
  onCategoryChange
}) {
  function handleSearchChange(event) {
    onSearchChange(event.target.value);
  }

  function handleCategoryChange(event) {
    onCategoryChange(event.target.value);
  }

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search}
        onChange={handleSearchChange}
      />

      <select
        name="filter"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
