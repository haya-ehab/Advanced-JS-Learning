// Promise = An Object that manages asynchronous operations.
// Wrap a Promise Object around {asynchronous code}
// "I promise to return a value"
// PENDING -> RESOLVED or REJECTED
// new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1- WALK THE DOG
// 2- CLEAN THE KITCHEN
// 3- TAKE OUT THE TRASH

// function walkDog() {
  
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//     resolves("you walk the dog");
//   }, 1500);
//     });
// }

// function cleanKitchen() {
//  return new Promise((resolve, reject) => {
//      setTimeout(() => {
//     resolves("you clean the kitchen");
//   }, 2500);
// });

// }

// function takeoutTrash() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//     resolves("you takeout the trash");
//   }, 500);
//   });

// }

// walkDog().then(value => {console.log(value); return cleanKitchen()})
// .then(value => {console.log(value); return takeoutTrash()})
// .then(value => {console.log(value); console.log("you finished all tasks")});


// ASYNC/AWAIT 

// function walkDog(){

// }

// function cleanKitchen(){

// }

// function takeOutTrash(){

// }

// async function doChores(){

// const walkDogResult = await walkDog();
// console.log(walkdog);

// const cleanKitchenResult = await cleanKitchen();
// console.log(cleanKitchen);

// const takeOutTrashResult = await takeOutTrash();
// console.log(takeouttrash);

// console.log("you finished all tasks");



// }