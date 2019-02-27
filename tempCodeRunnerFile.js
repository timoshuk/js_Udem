const arr = [1, 15, 22, 15, 98, 63, 46, 1, 15, 0, 63];

const narr = [...new Set(arr)].sort();

console.log(narr);
