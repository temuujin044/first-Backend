const express = require("express");
// const products = reguire("./dummy.json");
const { products, users } = require("./dummy.json");
const app = express();

// console.log(products);
// const products = [
//   {
//     name: "iphone",
//     price: 1000,
//   },
//   {
//     name: "samsung",
//     price: 900,
//   },
//   {
//     name: "sony",
//     price: 1100,
//   },
// ];

app.get("/products", (reguest, response) => {
  response.type = "application/json";
  response.send({ products: products });
});

app.get("/users", (reguest, response) => {
  response.type = "application/json";
  response.send({ users: users });
});

app.get("/abc", (reguest, response) => {
  response.type = "application/json";
  response.send({ message: "hello" });
});

app.listen(3001, () => {
  console.log("server is listening");
});
