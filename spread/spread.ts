// 배열 전개
let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];
console.log(bothPlus); // [0, 1, 2, 3, 4, 5]

// 객체 전개
let defaults = { food: 'spicy', price: '$$', ambiance: 'noisy' };
let search = { ...defaults, food: 'rich' };
console.log(search); // { food: rich, price: $$, ambiance: noisy }