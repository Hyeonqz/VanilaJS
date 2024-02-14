//객체의 장점 중 하나는 함수를 프로퍼티로 저장할 수 있다
let john = {
    name : 'john',
    sayHi() {
        console.log("hi?")
    }
};

john.sayHi();

console.log();

let str = "hello";
console.log(str.toUpperCase());
console.log();

let n = 1.23456;
console.log(n.toFixed(2));
console.log()

console.log(typeof 0);
console.log(typeof new Number(0));