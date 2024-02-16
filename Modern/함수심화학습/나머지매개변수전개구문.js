function sum(a,b) {
    return a+b;
}

console.log(sum(1,2,3,4,5,));

function sumAll(...args) {
    let sum = 0;

    for (let arg of args) {
        sum += arg;
    }
    return sum;
}

console.log(sumAll(1,2,3,4,5,6,7,8,9));
console.log();

function showName() {
    console.log( arguments.length);
    console.log( arguments[0]);
    console.log( arguments[1]);
}

showName("Bora","Lee");
showName("Bora");
console.log()

let arr = [3,5,1];
console.log( Math.max(...arr));
console.log()

let arr1 = [1,2,3];
let arrCopy = [...arr];

console.log(arrCopy);