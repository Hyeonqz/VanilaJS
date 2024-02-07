//화살표 함수
let sum = (a,b) => a + b;

console.log(sum(2,3));

let double = n => n*2;
console.log(double(3));

let age = 10;
let welcome = (age<18) ?
    () => console.log('hi') :
    () => console.log('hello');

welcome();

const ask = (question,yes,no) => {
    if(confirm(question)) {
        yes();
    } else {
        no();
    }
}
ask('hi');