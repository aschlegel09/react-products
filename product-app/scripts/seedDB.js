const mongoose = require('mongoose');
const Product = require("../models/product");
const User = require("../models/User");

// This file empties the Products collection and inserts the product below
const productSeed = [
  {
    name: "puffy jacket",
    category: "apparel",
    cost: 170,
    color: "blue",
    size: "medium",
    brand: "North Face",
    date: new Date(Date.now())
  },
  {
    name: "outdoors sunglasses",
    category: "accessory",
    cost: 110,
    color: "black",
    size: "average",
    brand: "Oakley",
    date: new Date(Date.now())
  },
  {
    name: "quarter zip fleece",
    category: "apparel",
    cost: 70,
    color: "grey",
    size: "large",
    brand: "Patagonia",
    date: new Date(Date.now())
  },
  {
    name: "men's lo-top sneakers",
    category: "shoes",
    cost: 55,
    color: "navy",
    size: "10",
    brand: "Vans",
    date: new Date(Date.now())
  },
  {
    name: "women's suit jacket",
    category: "apparel",
    cost: 200,
    color: "black",
    size: "small",
    brand: "Banana Republic",
    date: new Date(Date.now())
  }
];

const userSeed = [
  {
    name: "Andy",
    email: "aschlegel09@gmail.com",
    loggedIn: true,
    date: new Date(Date.now())
  }
];

mongoose.connect(
  process.env.MONGOLAB_URI ||
  "mongodb://localhost/reactprod", { useNewUrlParser: true }
),
  console.log("Adding Seeds");

userSeed.map((data) => {
  const user = new User(data);
  user.save();
  user
  .remove({})
  .then(() => user.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " record inserted");
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
});

// productSeed.map(data => {
//   const product = new Product(data);
//   // product.save();
//   product
//     .remove({})
//     .then(() => product.collection.insertMany(productSeed))
//     .then(data => {
//       console.log(data.result.n + " records inserted!");
//       process.exit(0);
//     })
//     .catch(err => {
//       console.error(err);
//       process.exit(1);
//     });
// });

