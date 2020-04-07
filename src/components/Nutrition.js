import React from "react";
const { nutritionAPI } = require("./nutritionAPI");

const Nutrition = async ({ items }) => {
  try {
    const response = await nutritionAPI("bread");

    const sodium = response[0].nf_sodium;
  } catch (error) {
    console.log(error);
  }
  //   let [...responses] = await nutritionAPI(...items[name]);

  //     for (let response in responses) {

  //fiber
  //sodium

  //plant-based

  //calories
  //   calories +=

  //processed index

  //meals / days (perishable index)
  // }
  return (
    <div>
      <span>{sodium}</span>
    </div>
  );
};

export default Nutrition;
