// function xyz() {
//   setTimeout(() => {
//     consle.log("second 2");
//   }, 2000);
//   setTimeout(() => {
//     console.log("second 3");
//   }, 3000);
//   setTimeout(() => {
//     console.log("second 4");
//   }, 4000);
//   setTimeout(() => {
//     console.log("second 5");
//   }, 5000);
// };
// xyz();

// function abc(sum) {
//   try {
//     consol.log("result");

//   }
//   catch (error) {
//     console.log("error");
//     console.log(error);
//   }
// };

// function sum(a, b) {
//   console.log(a + b);
// };

// abc();

//   function asyncOperation2(arg2, callback2) {
//     // Asynchronous operation 2
//     // ...
//     callback2(null, result2);
//   }

//   function asyncOperation3(arg3, callback3) {
//     // Asynchronous operation 3
//     // ...
//     callback3(null, result3);
//   }

// Callback hell
// Simulated asynchronous operations
// function asyncOperation1(arg1, callback1) {
//   setTimeout(() => {
//     console.log("Async operation 1 completed");
//     const result1 = arg1 + " - Result 1";
//     callback1(null, result1);
//   }, 1000);
// }

// function asyncOperation2(arg2, callback2) {
//   setTimeout(() => {
//     console.log("Async operation 2 completed");
//     const result2 = arg2 + " - Result 2";
//     callback2(null, result2);
//   }, 1500);
// }

// function asyncOperation3(arg3, callback3) {
//   setTimeout(() => {
//     console.log("Async operation 3 completed");
//     const result3 = arg3 + " - Result 3";
//     callback3(null, result3);
//   }, 500);
// }

// asyncOperation1("Input", (error1, result1) => {
//   if (error1) {
//     console.error("Error in asyncOperation1:", error1);
//   } else {
//     asyncOperation2(result1, (error2, result2) => {
//       if (error2) {
//         console.error("Error in asyncOperation2:", error2);
//       } else {
//         asyncOperation3(result2, (error3, result3) => {
//           if (error3) {
//             console.error("Error in asyncOperation3:", error3);
//           } else {
//             console.log("Final result:", result3);
//           }
//         });
//       }
//     });
//   }
// });

// function async1(argu1, callback1) {
//   console.log("asyn1 is operate");
//   result1 = "xyz";
//   callback1(null, result1);
// }

// function async2(argu2, callback1) {
//   console.log("asyn2 is operate");
//   result1 = "xyz";
//   callback1(null, result1);
// }

// function async3(argu3, callback1) {
//   console.log("asyn3 is operate");
//   result1 = "xyz";
//   callback1(null, result1);
// }

// async1("lokesh", (error, result1) => {
//   if (error) {
//     console.log("error");
//   } else {
//     async2(result1, (error, result2) => {
//       if (error) {
//         console.log("error2");
//       } else {
//         async3(result2, (error, result3) => {
//           if (error) {
//             console.log("error3");
//           } else {
//             console.log("finish the hell");
//           }
//         });
//       }
//     });
//   }
// });


// function job(data) {
//     const type = typeof data
//     return new Promise((resolve,reject) => {
//         if(isNaN(data)){
//             reject("error");
//         }
//         else if(data % 2 !== 0){
//             setTimeout(()=>{
//                 resolve("odd")
//             },1000)
//         }
//         else if(data % 2 === 0){
//             setTimeout(() => {
//                 resolve("even")
//             },2000)
//         }
//     });
// }

// job(2).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })

console.log("this is git testing");