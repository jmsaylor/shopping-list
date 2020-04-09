let headers = {
  method: "GET",
  headers: {
    "x-app-id": "a6d98342",
    "x-app-key": "7cad6bc66f5b9afeec2311d8d9600129",
    "x-remote-user-id": "0",
  },
};
const food = this.props.items[0].name;
console.log("Search Item: ", food);
const url = "https://trackapi.nutritionix.com/v2/search/instant?query=" + food;
console.log("API url: ", url);
axios
  .get(url, headers)

  .then((res) => {
    console.log(res);

    // this.state.sodium += res.data.common[0].;
  })
  .catch((err) => {
    console.error(err);
  });
