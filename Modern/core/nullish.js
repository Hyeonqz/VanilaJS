let first = null;
let last = null;
let nickName = 'viloet';
console.log(first?? last ?? nickName ?? 'hi');

let height = 0;
console.log(height||100);
console.log(height&&100);
console.log();

let height = null;
let width = null;
let area = (height??100) * (width??50);