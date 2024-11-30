// function abc ()
// {
//     console.log(a);


//      var a = 10;
// }
// abc()
// // abc()   hoisting


// function abc ()
// {
//     console.log(a,b,c);

//     const c = 30;
//     let b = 20;
//      var a = 10;
// }
// abc()
// // abc()   hoisting

//question implicit and explixti binding

// var obj = {
//     name: 'Divyansh',
//     display : function (){
//         console.log(this.name);
//     },
// }
//     var obj1 = {
//         name: 'Abc',

//     };

//     obj.display()
//     obj.display.call(obj1)  
// var createHelloWorld = function() { 
//     return function() {
//         return "Hello World";
//     }
// }


// console.log("a")
// setTimeout(() => console.log("set"), 0);
// Promise.resolve(() => console.log("pro")).then((res)=> res());
// console.log("b")

// event 
//infinite currying


function add(a){
return function (b){
    return function (b) {
       if(b) return add(a + b );
       return a;
        
    }
}
}

console.log(add(5)(2)());