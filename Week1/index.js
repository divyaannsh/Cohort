// // cretaeing a http server
// //express
// // node default librtary

// const express = require("express");

// const app = express();

// function sum(n) { m
//     let ans = 0;
//     for (let i =1; i<=n; i++){
//         ans = ans + i;
//     }
//   return ans; 
// }
// // req is request and res is response
// app.get("/", function(req, res) {
//       const n = req.query.n;
//       const ans = sum(n);  
//       res.send("hi there ans is "  + ans)
// })
     
// app.listen(3000);


// // function definition
// function calculateBill() {
//   // this is the function body
//   console.log("Running Calculate Bill!!");
// }
// // function call or function invocation
// calculateBill();


// // function definition
// function calculateBill() {
//   // this is the function body
//   console.log("Running Calculate Bill!!");
//   const total = 100 * 1.13;
//   console.log(total);
// }
// // function call or function invocation
// calculateBill();

// const total = 100 * 1.13;
// console.log(total);
// return total;

// // function call or function invocation
// calculateBill();

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase());
  }
  yell();
}