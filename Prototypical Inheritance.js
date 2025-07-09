// Creating Your Own Prototypical Inheritance
// function Shape() {

// }

// Shape.prototype.duplicate = function() {
//     console.log('duplicate');
// }

// function Circle(radius) {
//     this.radius = radius;
// }

// Circle.prototype = Object.create(Object.prototype); // Object Base
// Circle.prototype = Object.create(Shape.prototype); // Object Base

// Circle.prototype.draw = function() {
//     console.log('draw');
// }

// const s = new Shape();
// const c = new Circle(1);

// Resetting the Constructor

// function Person(name) {
//   this.name = name;
// }

// Person.prototype = {
//   constructor: Person, // 👈 Resetting the constructor
//   greet() {
//     console.log("Hi, I'm " + this.name);
//   }
// };

// const user = new Person("Haya");

// console.log(user.constructor); // ✅ [Function: Person]

// Calling the Super Constructor ->
// - Calls the parent class's constructor

// Intermediate Function Inheritance

// function extend(Child, Parent) {
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
// }

// function Circle(radius, color) {
//     Shape.call(this, color);

//     this.radius = radius;
// }

// extend(Circle, Shape);




// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

// Circle.prototype.draw = function() {
//     console.log('draw');
// }

// function Square(size) {
//     this.size = size;
// }

// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;

// Method Overriding

// function extend(Child, Parent) {
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
// }
// function Shape(color) {

// }

// Shape.prototype.duplicate = function() {
//     console.log('duplicate');
// }

// function Circle() {

// }

// extend(Circle, Shape);

// const c = new Circle();