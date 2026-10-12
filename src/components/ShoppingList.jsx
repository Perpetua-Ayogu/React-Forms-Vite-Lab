
import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [shoppingItems, setShoppingItems] = useState(items);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleItemFormSubmit(newItem) {
    setShoppingItems((previousItems) => [...previousItems, newItem]);
  }

  const itemsToDisplay = shoppingItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />

      <Filter
        search={search}
        selectedCategory={selectedCategory}
        onSearchChange={setSearch}
        onCategoryChange={setSelectedCategory}
      />

      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
