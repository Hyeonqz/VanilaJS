let now = new Date();
console.log(now);
console.log()

let Jan01_1970 = new Date(0);
console.log(Jan01_1970);
console.log()

let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969);
console.log()

let date1 = new Date("2024-02-15");
console.log(date1);

console.log(date1.getDate());
console.log(date1.getHours());
console.log(date1.getUTCHours());
console.log()

let date3 = new Date(2023,0,31);
console.log(date3);
date3.setDate(date3.getDate()+2);
date3.setSeconds(date3.getSeconds()+700);
console.log(date3);

let start = new Date();
for (let i = 0; i <100000 ; i++) {
    let doSomething = i*i*i;
}
let end = new Date();
console.log(`반복문을 모두 도는데 ${start}-${end} 밀리초 걸림`);