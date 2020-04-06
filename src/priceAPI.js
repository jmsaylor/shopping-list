const fetch = require("node-fetch");

async function priceAPI(product) {
  let url = "https://grocerybear.com/getitems";
  let payload = {
    method: "POST",
    headers: {
      // "api-key": "123ABC",
      "Content-Type": "application/json",
    },
    body: {
      city: "New York",
      product: product,
      num_days: 0,
    },
  };

  try {
    let response = await fetch(url, payload);

    console.log(response);

    console.log(payload);
  } catch (error) {
    console.error(error);
  }
}
