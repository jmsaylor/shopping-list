const axios = require("axios");
const fetch = require("node-fetch");

async function apiCall(food) {
  let url = `https://trackapi.nutritionix.com/v2/search/instant?query=${food}`;
  let headers = {
    method: "GET",
    headers: {
      "x-app-id": "a6d98342",
      "x-app-key": "7cad6bc66f5b9afeec2311d8d9600129",
      "x-remote-user-id": "0",
    },
  };

  try {
    const response = await fetch(url, headers);
    const resJSON = await response.json();
    return resJSON;
  } catch (error) {
    console.log(error);
  }
}

async function apiNutrition(search) {
  let url = `https://trackapi.nutritionix.com/v2/natural/nutrients`;
  let body = {
    query: search,
    timezone: "US/Eastern",
  };
  let headers = {
    method: "POST",
    headers: {
      "x-app-id": "a6d98342",
      "x-app-key": "7cad6bc66f5b9afeec2311d8d9600129",
      "x-remote-user-id": "0",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  try {
    let response = await fetch(url, headers);
    let resJSON = await response.json();
    return resJSON;
  } catch (error) {
    console.error(error);
  }
}

async function display() {
  console.log(await apiNutrition("bread"));
}

// display();

exports.apiCall = apiCall;
exports.nutritionAPI = apiNutrition;
