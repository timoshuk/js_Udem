// Code Runner
let arr = ["aaa", "bbb", "ccc", 111];
let arr2 = [1, 15, 2, 78, 11, 46];
console.log(arr);

arr2.sort(function(a, b) {
  return a - b;
});

console.log(arr2);
