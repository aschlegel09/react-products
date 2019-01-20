// const mongoose = require('mongoose');
// const Product = require("../models/product");
// const User = require("../models/User");

// This file empties the Products collection and inserts the product below
export const  productSeed = [
  {
    id: 1,
    key: "1",
    name: "puffy jacket",
    category: "apparel",
    cost: 170,
    color: "blue",
    size: "medium",
    brand: "North Face",
    img: "img/turtleBay.png",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 2,
    key: "2",
    name: "outdoors sunglasses",
    category: "accessory",
    cost: 110,
    color: "black",
    size: "average",
    brand: "Oakley",
    img: "img/turtleBay.png",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 3,
    key: "3",
    name: "quarter zip fleece",
    category: "apparel",
    cost: 70,
    color: "grey",
    size: "large",
    brand: "Patagonia",
    img: "img/turtleBay.png",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 4,
    key: "4",
    name: "men's lo-top sneakers",
    category: "shoes",
    cost: 55,
    color: "navy",
    size: "10",
    brand: "Vans",
    img: "img/turtleBay.png",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 5,
    key: "5",
    name: "women's suit jacket",
    category: "apparel",
    cost: 200,
    color: "black",
    size: "small",
    brand: "Banana Republic",
    img: "img/turtleBay.png",
    inCart: false,
    count: 0,
    total: 0
  }
];

export const userSeed = [
  {
    id: 1,
    name: "Andy",
    email: "aschlegel09@gmail.com",
    loggedIn: false,
    date: new Date(Date.now())
  }
];

export const detailProduct = [
  {
    id: 5,
    name: "women's suit jacket",
    category: "apparel",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec tortor dui. Nulla nunc massa, molestie in augue sed, posuere suscipit risus. Morbi nec magna interdum lectus luctus feugiat eget in urna. In at velit ultrices, efficitur eros id, tempus purus. Phasellus ullamcorper, urna quis lobortis volutpat, odio purus semper elit, nec efficitur velit tortor nec elit. In hac habitasse platea dictumst. Suspendisse aliquet urna erat, sit amet maximus nisi pharetra ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus orci vitae quam eleifend dignissim. Suspendisse condimentum est tellus, vel scelerisque est imperdiet ac. Nunc pellentesque non mi quis semper. Duis magna purus, egestas ac accumsan ac, egestas ut orci. In auctor magna vel sem porta interdum. Duis eget ullamcorper tellus.",
    cost: 200,
    color: "black",
    size: "small",
    brand: "Banana Republic",
    img: "img/turtleBay.png",
    inCart: false,
    count: 0,
    total: 0
  }
];

// mongoose.connect(
//   process.env.MONGOLAB_URI ||
//   "mongodb://localhost/reactprod", { useNewUrlParser: true }
// ),
//   console.log("Adding Seeds");

// userSeed.map(data => {
//   const user = new User(data);
//   user.save();
//   user
//   .remove({})
//   .then(() => user.collection.insertMany(userSeed))
//   .then(data => {
//     console.log(data.result.n + " record inserted");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.log(err);
//     process.exit(1);
//   });
// });

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

