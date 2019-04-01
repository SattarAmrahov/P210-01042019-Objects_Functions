// function funcDecl(a, b) {
//     return a * b;
// }

// let funcExpr = function (a, b) {
//     return a * b
// };

// var funcConst = new Function("a", "b", "return a * b");

// (function () {
//     var x = "Hello!!";  // I will invoke myself
// })();

// const arrowFunct = (x, y) => {
//     return x * y;
// };

// function myFunction(x, y = 0) {


// }


// function sumAll(){
//     var sum = 0;
//     for (var i = 0; i < arguments.length; i++) {
//       sum += arguments[i];
//     }
//     return sum;
// }

// console.log(funcDecl(3, 4));
// console.log(funcExpr(3, 4));
// console.log(arrowFunct(3, 4));
// console.log(myFunction(3));
// console.log(sumAll(3,4,1,0,10,5));


// var varOne = 10;
// var varTwo = 20;

// function callByValue(a, b) {
//     console.log("Inside Call by Value Method");
//     a = 100;
//     b = 200;
//     console.log("varOne =" + a + " varTwo =" + b);
// }

// console.log("varOne =" + varOne +" varTwo =" +varTwo); 
// callByValue(varOne, varTwo)  
// console.log("varOne =" + varOne +" varTwo =" +varTwo);


// let varObj = { name: "Ekber" };
// function callByReference(a) {
//     console.log("Inside Call by Reference Method");
//     a.name = "Murad";
//     console.log(a);
// }

// console.log("Before Call by Reference Method");
// console.log(varObj);
// callByReference(varObj)
// console.log("After Call by Reference Method");
// console.log(varObj);

// let myObject1 = varObj;
// myObject1.name = "Farid";

// let myObject2 = myObject1;
// myObject2.name = "Nicat";

// console.log(varObj);
// console.log(myObject1);
// console.log(myObject2);


// let a = 1;
// let b = a;
// b= 10;

// let c = b;
// c=15;
// console.log(a,b, c);

// function Person(name){
//     this.name = name;
// }
// let x = new Person("Test");
// let student = function(name){
//     this.name = name;
// };
// let y = new student("Test2");
// console.log(x,y);




// var person = {
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// }
// var person1 = {
//     firstName: "John",
//     lastName: "Doe"
// };
// var person2 = {
//     firstName: "Mary",
//     lastName: "Doe"
// };


// console.log(person.fullName.call(person2));   // Will return "John Doe"


// var person = {
//     fullName: function (city, country) {
//         return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
// }
// var person1 = {
//     firstName: "John",
//     lastName: "Doe"
// }
// person.fullName.call(person1, "Oslo", "Norway");


// console.log(person);
// console.log(person1);
// console.log(person.fullName.call(person1, "Oslo", "Norway"));
var counter = 0;
function a(){
    
    counter += 1; 
    return counter; 
}

let a = (function () {
    var counter = 0;
    return function () { counter += 1; return counter; }
})();

console.log(counter);


console.log(a());
console.log(a());

