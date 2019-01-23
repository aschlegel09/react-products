// const mongoose = require('mongoose');
// const Product = require("../models/product");
// const User = require("../models/User");

// This file empties the Products collection and inserts the product below
export const  productSeed = [
  {
    id: 1,
    key: "1",
    name: "Turtle Bay c. 1999",
    category: "digital photograph",
    cost: 25,
    color: "Black & White",
    size:'24" x 18"',
    brand: "Anonymous",
    img: "img/turtleBay.png",
    inCart: false,
    count: 0,
    total: 0,
    info: "Turtle Bay, located on Oahu, Hawaii, attracts thousands of tourists and honeymooners from across the world. Many Hollywood movies film at this exact location."
  },
  {
    id: 2,
    key: "2",
    name: "Abstraction One",
    category: "acryllic",
    cost: 10,
    color: "multicolor",
    size: '18" by 24"',
    brand: "Anonymous",
    img: "img/abstractOne.png",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 3,
    key: "3",
    name: "Abstraction Two",
    category: "acryllic",
    cost: 10,
    color: "multicolor",
    size: '18" by 24"',
    brand: "Anonymous",
    img: "img/abstractTwo.png",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 4,
    key: "4",
    name: "Abstraction Three",
    category: "acryllic",
    cost: 10,
    color: "multicolor",
    size: '18" by 24"',
    brand: "Anonymous",
    img: "img/abstractThree.png",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 5,
    key: "5",
    name: "Sailboat One",
    category: "digital photograph",
    cost: 15,
    color: "Black & White",
    size: '27" x 18"',
    brand: "Anonymous",
    img: "img/boatOne.png",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 6,
    key: "6",
    name: "Sailboat Two",
    category: "digital photograph",
    cost: 15,
    color: "Black & White",
    size: '28.5" x 18"',
    brand: "Anonymous",
    img: "img/boatTwo.png",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 7,
    key: "7",
    name: "Palm Tree One",
    category: "digital photograph",
    cost: 10,
    color: "Black & White",
    size: '18" x 14.5"',
    brand: "Anonymous",
    img: "img/palmTree.png",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 8,
    key: "8",
    name: "Palm Tree Two",
    category: "digital photograph",
    cost: 200,
    color: "Black & White",
    size: '27" x 18"',
    brand: "Anonymous",
    img: "img/palmTreeTwo.png",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 9,
    key: "9",
    name: "German Countryside c. 1972",
    category: "retro print",
    cost: 20,
    color: "Warm Black & White",
    size: '18" x 13.5"',
    brand: "Anonymous",
    img: "img/retroGermany.png",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 10,
    key: "10",
    name: "German Mountains c. 1969",
    category: "retro print",
    cost: 25,
    color: "Warm Black & White",
    size: '13.5" x 24"',
    brand: "Anonymous",
    img: "img/retroGermanyTwo.png",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 11,
    key: "11",
    name: "Italian Streets One",
    category: "retro print",
    cost: 25,
    color: "Warm Black & White",
    size: '18" x 23"',
    brand: "Anonymous",
    img: "img/retroItaly.png",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 12,
    key: "12",
    name: "Italian Streets Two",
    category: "retro print",
    cost: 20,
    color: "Warm Black & White",
    size: '18" x 13.5"',
    brand: "Anonymous",
    img: "img/retroItalyTwo.png",
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

