var products = [
    {
      id: 101,
      title: "Sony LED 40 inch",
      variations: [
        { id: 1, color: "black", price: 50000, quantity: 5 },
        { id: 2, color: "red", price: 50000, quantity: 1 },
        { id: 3, color: "silver", price: 55000, quantity: 8 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 4.5,
          title: "Very Good Product",
          comments: "zubair It is a very good product ....",
          date: "05-02-2021",
          status: false,
          id: 3,
          user: "Zubair",
          rating: 5.0,
          title: "Very Good Product",
          comments: "zubair It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
        {
          id: 3,
          user: "Ali",
          rating: 5.0,
          title: "bad Product",
          comments: "ali It is a very good product ....",
          date: "04-02-2021",
          status: true,
        },
      ],
    },
    {
      id: 102,
      title: "Mobile",
      variations: [
        { id: 1, color: "black", price: 50000, quantity: 5 },
        { id: 2, color: "red", price: 50000, quantity: 1 },
        { id: 3, color: "silver", price: 55000, quantity: 8 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 4.5,
          title: "Very Good Product",
          comments: "zubair It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
        {
          id: 3,
          user: "Ali",
          rating: 5.0,
          title: "bad Product",
          comments: "ali It is a very good product ....",
          date: "04-02-2021",
          status: true,
        },
      ],
    },
    {
      id: 103,
      title: "Bike",
      variations: [
        { id: 1, color: "black", price: 55000, quantity: 5 },
        { id: 2, color: "red", price: 50000, quantity: 1 },
        { id: 3, color: "silver", price: 55000, quantity: 8 },
        { id: 4, color: "silver", price: 55000, quantity: 8 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 3.0,
          title: "Very Good Product",
          comments: "zubair It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
      ],
    },
  ];
   

// ********************JavaScript Exercises: Product Data Modeling***********************

// 1. Find a Product by ID
// Write a program that takes a product ID and prints the product object.
// Output:
// {
//   "id": 102,
//   "title": "Mobile",
//   "varations": [...],
//   "reviews": [...]
// }


//   var productId = 102;
// for(var i=0;i<products.length;i++){
//     if (products[i].id === productId) {

//       console.log(products[i]);
    
//   }
// }
// ---------------------------Q 1 Done---------------------------


// 2. List All Product Titles
// Write a program that prints all product titles.
// Output:
// Sony LED 40 inch
// Mobile
// Bike


// for ( var a=0; a<products.length; a++){
//       console.log(products[a].title)
// }


// -----------------------------Q 2 done------------------------


// 3. Find Available Colors of a Product
// Given a product ID, print all available colors.
// Output:
// black
// red
// silver

// for (var c = 0; c < products.length; c++) {
//   for (var n = 0; n < products[c].variations.length; n++) {
//       console.log(products[c].variations[n].color);
//   }
// }

// ----------------------Q 3 done-----------------