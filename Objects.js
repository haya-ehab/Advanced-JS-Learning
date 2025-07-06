// Object Literals 
// Use Let or Const not Var

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function() {
//         console.log('draw');
//     }
// };

// circle.draw();


// Factory Function

// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
//             console.log('draw');
//         }
//     };
// }

// circle.draw();

// personally i prefer the constructor function but its up to you


// Constructor Function
 
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const another = new Circle(1);




// Note: Using '', "", `` are better

// Functions are Objects

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const Circle1 = new Function('radius', `
//     this.radius = radius;
//     this.draw = function() {
//     console.log('draw);
//     }
//     `);

//     const circle = new Circle1(1);

// const another = new Circle(1);


// Value vs Reference Types

// Value Types -> 
// Number, String, Boolean, Symbol, Undefined And Null

// Reference Types ->
// Objects, Functions, Arrays

// let number = 10;

// function increase(number) {
//     number++;
// }

// increase(number);
// console.log(number);

// Adding or Removing Properties

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(10);
// const propertyName = 'center location';
// circle.location = { x: 1 };

// // user,token = 'asdasdasd'

// delete circle['location'];

// Enumerating Properties

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(10);

// for (let key in circle) {
//     if (typeof circle[key] !== 'function')
//     console.log(key, circle[key]);
// }

// const keys = Object.keys(circle);
// console.log(keys);

// if ('radius' in circle)
//     console.log('Circle has a radius');

// Abstraction

// function Circle(radius) {
//     this.radius = radius;
//     this.defaultLocation = {x: 0, y: 0};
//     this.computeOptimumLocation = function() {
//         // ...
//     }
//         this.draw = function() {
//             this.computeOptimumLocation();
//         console.log('draw');
//     };
// }

// const circle = new Circle(10);

// Private Properties and Methods

// function Circle(radius) { 
//    // Public member 
//    this.radius = radius; 

//    // Private member                       
//    let defaultLocation = {};                      
// }                  


// Getters and Setters

// Object.defineProperty(this, 'defaultLocation', {
//     get: function() { return defaultLocation; },
//     set: function(value) { defaultLocation = value; }
// });


