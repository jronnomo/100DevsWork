//Q1
//1

//Q2 Delay with a promise
// The built-in function setTimeout uses callbacks. Create a promise-based alternative.

// The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it, like this:

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
  
  delay(3000).then(() => alert('runs after 3 seconds'));

// Q3  Animated circle with promise
// Rewrite the showCircle function in the solution of the task Animated circle with callback so that it returns a promise instead of accepting a callback.

function showCircle(cx, cy, radius) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    return new Promise(resolve => {
      setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';

        div.addEventListener('transitionend', function handler() {
          div.removeEventListener('transitionend', handler);
          resolve(div);
        });
      }, 0);
    })
  }


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

// The short answer is: no, they are not equal:

// The difference is that if an error happens in f1, then it is handled by .catch here:

// promise
//   .then(f1)
//   .catch(f2);
// …But not here:

// promise
//   .then(f1, f2);
// That’s because an error is passed down the chain, and in the second code piece there’s no chain below f1.

// In other words, .then passes results/errors to the next .then/catch. So in the first example, there’s a catch below, and in the second one there isn’t, so the error is unhandled.