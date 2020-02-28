let f_older = 0;
let f_old = 1;
var n = 0;

let fibonacci = function(n) {
  n = n;
  for (let i=2; i<=n; i++) {
    let f_new = f_older + f_old;
    f_older = f_old;
    f_old = f_new;
  }
  return f_old;
}

let num = 15;
console.log("F" + num + ": " + fibonacci(num));