// let name ={
//     firstname: "Dvyansh",
//     lastame :"Srivastav",
//     printFullname: function(hometown,state){
//         console.log(this.firstname + " " + this.lastame + "from" + " , " + hometown + " , " +  state);
//     }
// }
//  name.printFullname("dehsras" , "uttarkhans");

//  let name2 ={
//     firstname: "sirah",
//     lastame: "Tendulkar",

//  }
//  // function boorowing by call method

//  name.printFullname.call(name2);

 
//  let name = {
//     firstname: "aksaysha",
//     lastame: "saini",
//  }

//  let printname = function () {
//     console.log(this.firstname+ "" + this.lastame);
//  }

//  let printmyname = printname.bind(name);
//  printmyname();

// Function.prototype.mybind = function(){

//  }
//  let printmyname2 = printname.mybind(name);

//  printmyname2


 //polyfill and bind method 

 //Function currying

//  let multiply = function(x,y) {
//     console.log(x * y );

//  }

//  let multiplybytwo = multiply.bind(this,2, 3);
//  multiplybytwo(5);
 
//  let multiplybythree = multiply.bind(this,3) ;
//  multiplybythree(5);
 
//Debouncing

 