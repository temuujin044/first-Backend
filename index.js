const express = require("express");
// const products = reguire("./dummy.json");
const { products, users } = require("./dummy.json");
const app = express();
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
// const fs = require("fs");

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

app.post("add-user", (reguest, response) => {
  // const newUser = reg.body;
  // console.log(newUser);

  // fs.writeFile("dummyTest.json", JSON.stringify(newUser), function (err) {
  //   if (err) throw err;
  //   console.log("Saved!");
  // });

  response.status(200);
  response.send("succes");
});

app.post("/users", (reguest, response) => {
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
