// 함수는 객체이다.
// 함수는 호출이 가능한 행동객체라고 이해하면 쉽다.

//name 프로퍼티
function sayHi() {
    console.log("hi");
}

console.log(sayHi.name);
console.log()

let sayHi1 = function() {
    console.log("HI")
}
console.log(sayHi1.name)

function f1(a) {

}

function f2(a,b) {

}

function many(a,b,...more) {

}

console.log(f1.length);
console.log(f1.length);
console.log(many.length);