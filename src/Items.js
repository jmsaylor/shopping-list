import React from "react";

const Items = ({ items, deleteItem }) => {
  const shoppingList = items.length ? (
    items.map((item) => {
      return (
        <div>
          <span
            key={item.id}
            onClick={() => {
              deleteItem(item.id);
            }}>
            {item.name}
          </span>
        </div>
      );
    })
  ) : (
    <p>Nothing to buy</p>
  );

  return <div>{shoppingList}</div>;
};

export default Items;
