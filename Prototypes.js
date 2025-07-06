// IMPORTANT!!
// - i will explain few Concepts before going in the code stuff


// What is Inheritance?

// -Inheritance is a concept in object-oriented programming 
// where one class (child) can use properties and methods of another class (parent) 
// like passing down traits from parents to children.

// What is Prototypes and Prototypical Inheritance?

// -A Prototype is just a regular Object
// -This is JavaScript’s way of doing inheritance: 
// instead of classes (like in Java or C++), 
// JavaScript objects inherit from other objects via the prototype chain.

// What is Multilevel Inheritance?

// -Multilevel Inheritance means that a class inherits from a class that itself already inherited from another class
// forming a chain of inheritance.

// Property Descriptors
// -A property descriptor is an object that describes the behavior of a property.

// Constructor Prototypes
// -When you create a function and use it as a constructor (with new),
// JavaScript automatically links all instances created from that constructor to the function’s prototype object.
// ->

// Object.getPrototypeOf(myObj);

// myObj._proto__ (parent of myObj)
// Construction.prototype ()

// function Circle(radius) {
//     this.radius = radius;
// }
// Circle.prototype

// const circle = new Circle(1);


// Prototype vs Instance Members'
// -> Explanation
// Prototype Member: it's Stored directly on the object itself, 
// it is defined inside the constructor and not shared

// Instance Member: It's Stored On the constructor's .prototype,
// and defined outside constructor, on .prototype and it is Shared

// function Person(name) {
//   this.name = name;           // Instance member
//   this.sayHi = function () {  // Instance member
//     console.log("Hi " + this.name);
//   };
// }

// // Prototype member
// Person.prototype.sayHello = function () {
//   console.log("Hello " + this.name);
// };

// const p1 = new Person("Haya");
// const p2 = new Person("Lina");

// p1.sayHi();    // Own method (each object has its own copy)
// p2.sayHi();    // Separate copy

// p1.sayHello(); // Shared method from prototype
// p2.sayHello(); // Shared method from prototype

