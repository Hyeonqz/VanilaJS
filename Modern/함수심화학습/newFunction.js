
let sum = new Function('a','b', 'return a+b');
console.log( sum(1,2));

let sayHi = new Function( console.log('hello'));
sayHi();

function getFunc() {
    let value = "테스트";
    let func = new Function( console.log(value));
    return func;
}
getFunc();