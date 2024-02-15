// 즉 반복 가능한 객체 라는 뜻이다.

let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};

for (let num of range) {
    console.log( num ); // 1, then 2, 3, 4, 5
}

for (let char of "test") {
    console.log( char );
}

let str = 'x😁';
for (let char of str) {
    console.log(str);
}
console.log();

let str1 = "Hello";
let iterator = str1[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) {
        break;
    }
    console.log(result.value);
}

console.log();


let arrayLike = {
    0 : "hello",
    1 : "world",
    length : 2
};

let arr2 = Array.from(arrayLike);
console.log(arr2.pop());















