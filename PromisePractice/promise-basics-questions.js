//Q1 
let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert);

//Q2 Delay with a promise
// The built-in function setTimeout uses callbacks. Create a promise-based alternative.

// The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it, like this:

function delay(ms) {
  // your code
}

delay(3000).then(() => alert('runs after 3 seconds'));


// Q3 Animated circle with promise
// Rewrite the showCircle function in the solution of the task Animated circle with callback so that it returns a promise instead of accepting a callback.

// The new usage:

showCircle(150, 150, 100).then(div => {
  div.classList.add('message-ball');
  div.append("Hello, world!");
});


// Take the solution of the task Animated circle with callback as the base.
// <!DOCTYPE html>
// <script>
// "use strict";

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve("value"), 2000);
// })
//   .finally(() => alert("Promise ready")) // triggers first
//   .then(result => alert(result)); // <-- .then shows "value"
// </script>

// Q4 Promise: then versus catch
// Are these code fragments equal? In other words, do they behave the same way in any circumstances, for any handler functions?

promise.then(f1).catch(f2);
Versus:

promise.then(f1, f2);

// Rewrite this callback-based function using Promises:

function loadScript(src, callback) {
    let script = document.createElement('script'); 
    script.src = src;

    script.onload = () => callback(null, script); 
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
    document.head.append(script);
}
