// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
Person.prototype.nationality = "English";
Person.prototype.name = function () {
    return this.firstName + " " + this.lastName
};


var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");
Object.seal(myFather)

myFather.firstName = "Tom";
myFather.height = 178;


console.log(Person);
console.log(myFather);
console.log(myMother);


// var x1 = new Object();   // A new Object object
// var x2 = new String();   // A new String object

// console.log(x2.__proto__.__proto__);
// var test = "";

// var x3 = new Number(10);   // A new Number object
// var myNumber = 5;
// console.log(x3 + myNumber);
// console.log(myNumber);

// var x4 = new Boolean();  // A new Boolean object
// var myBool = false;
// console.log(x4);
// console.log(myBool);


// var x5 = new Array();  // A new Array object
// var x6 = new RegExp();   // A new RegExp object
// var x7 = new Function(); // A new Function object
// var x8 = new Date();   // A new Date object