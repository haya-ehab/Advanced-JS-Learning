// ES6 Classes
// Classes are Functions
// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//         this.move = function() {}
//     }
//     draw() {
//         console.log('draw');
//     }
// }

// const c = new Circle(1);

// Hoisting
// -Hoisting in ES6 Classes that variable and function declarations are moved
//  to the top of their scope during compilation.

// Static Methods

// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }

// // Instance Method
// draw() {

// }

// // Static Method

// static parse(str) {
// const radius = JSON.parse(str).parse;
// return new Circle(radius);
// }
//  }

// const circle =  Circle.parse('{"radius": 1}');
// Circle.parse()
// console.log(circle);

// The This Keyword

// const Circle = function() {
//     this.draw = function() {
//         console.log(this); }
// };

// const c = new Circle();
// c.draw();

// const draw = c.draw;
// draw();

// Private Members Using Symbols

// const _radius = Symbol();
// const _draw = Symbol();

// class Circle {
//     constructor(radius) {
//       this[_radius] = radius;
//     }
//    [_draw]() {

//    }
//    }

// const c = new Circle(1);

// Private Members Using WeakMaps

// const _radius = new WeakMap();
// const _move = new WeakMap();
// const privateProps = new WeakMap();

// class Circle {
//     constructor(radius) {
//       privateProps.set(this, {
//         radius: radius,
//         move: () => {

//         }
//       });

//       _move.set(this, () => {
//         console.log('move', this);
//       });
//     }
//     draw() {
//       _move.get(this)();
//     }
// }

// const c = new Circle(1);

// Getters and Setters

// const _radius = new WeakMap();

// class Circle {
//     constructor(radius) {
//         _radius.set(this, radius);

//         Object.defineProperty(this, 'radius', {
//             get: function() {

//             }
//         });
//     }

// getRadius() {
//     return _radius.get(this);
// }
// setRadius(value) {
//     if (value <= 0) throw new Error('invalid Radius')
//         _radius.set(this, value);
// }
// }

// const c = new Circle(1);

// Inheritance

// class Shape {
//     constructor(color) {
//         this.color = color;
//     }
//     move() {
//     console.log('move');
// }
// }

// class Circle extends Shape {
//     constructor(color, radius){
//      super(color);
//      this.radius = radius;
//     }
//     draw() {
//         console.log('draw');
//     }
// }

// const c = new Circle('red', 1);

// Method Overriding 

// class Shape {
//     move() {
//         console.log('move');
//     }
// }
//  class Circle extends Shape {
//     move() {
//         super.move();
//     console.log('circle move');
//     }
//  }
//  const c = new Circle();

