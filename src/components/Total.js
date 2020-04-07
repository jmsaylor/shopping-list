import React, { Component } from "react";

const Total = ({ items }) => {
  const response = {
    bread: {
      price: 4.25,
    },
    eggs: {
      price: 2.5,
    },
    milk: {
      price: 3.15,
    },
  };

  let total = 0;

  items.forEach((item) => {
    total += response[item.name].price;
  });

  return (
    <div>
      <span>${total}</span>
    </div>
  );
};

export default Total;
