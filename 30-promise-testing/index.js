// function delay(time) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(resolve, time);
//   });
// }

// delay(100) // step 1
//   .then(function STEP2() {
//     console.log("step 2 (after 100ms)");
//     return delay(200);
//   })
//   .then(function STEP3() {
//     console.log("step 3 (after another 200ms)");
//   })
//   .then(function STEP4() {
//     console.log("step 4 (next Job)");
//     return delay(50);
//   })
//   .then(function STEP5() {
//     console.log("step 5 (after another 50ms)");
//   })

// // assume an `ajax( {url}, {callback} )` utility

// // Promise-aware ajax
// function request(url) {
//   return new Promise(function (resolve, reject) {
//     // the `ajax(..)` callback should be our
//     // promise's `resolve(..)` function
//     ajax(url, resolve);
//   });
// }

// request("http://some.url.1/")
//   .then(function (response1) {
//     return request("http://some.url.2/?v=" + response1);
//   })
//   .then(function (response2) {
//     console.log(response2);
//   });

////////rejected in a resolve is still rejected

// var rejectedPr = new Promise(function (resolve, reject) {
//   // resolve this promise with a rejected promise
//   resolve(Promise.reject("Oops"));
// });

// rejectedPr.then(
//   function fulfilled() {
//     // never gets here
//   },
//   function rejected(err) {
//     console.log(err);	// "Oops"
//   }
// );

////////error-first callback

// function foo(cb) {
//   setTimeout(function () {
//     try {
//       var x = baz.bar();
//       cb(null, x); // success!
//     }
//     catch (err) {
//       cb(err);
//     }
//   }, 100);
// }

// foo(function (err, val) {
//   if (err) {
//     console.error(err); // bummer :(
//   }
//   else {
//     console.log(val);
//   }
// });

////////error-first promise

// var p = Promise.reject("Oops");

// p.then(
//   function fulfilled() {
//     // never gets here
//   },
//   function rejected(err) {
//     console.log(err); // "Oops"
//   }
// );

///////using promise.all
// `request(..)` is a Promise-aware Ajax utility
// var p1 = request("http://some.url.1/");
// var p2 = request("http://some.url.2/");

// Promise.all([p1, p2])
//   .then(function (msgs) {
//     // both `p1` and `p2` fulfill and pass in
//     // their messages here
//     return request(
//       "http://some.url.3/?v=" + msgs.join(",")
//     );
//   })
//   .then(function (msg) {
//     console.log(msg);
//   });

//////using promise.race
// var p1 = request("http://some.url.1/");
// var p2 = request("http://some.url.2/");

// Promise.race([p1, p2])
//   .then(function (msg) {
//     // either `p1` or `p2` will win the race
//     return request(
//       "http://some.url.3/?v=" + msg
//     );
//   })
//   .then(function (msg) {
//     console.log(msg);
//   });
