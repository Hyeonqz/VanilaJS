let single = '작은따옴표';
let double = '큰따옴표';
let backticks = '백틱';

function sum(a,b) {
    return a+b;
}

console.log(`1+2=${sum(1,2)}`);
console.log()
let guestList = `손님:
* john
* pete
* marry
`;
console.log(guestList);

let guestList2 = "손님:\n * John\n * Pete\n * Marry\n";
console.log(guestList2)

let str = `hello`;

console.log(str[0]);
console.log(str.charAt(0));
console.log(str[str.length-1]);

console.log(str[1000]);
console.log(str.charAt(1000));

str[0] = 'A';
console.log(str[0]);
console.log()

let str1= 'Hi';
str1 = 'h' + str[1];
console.log(str1);
console.log();

//부분 문자열 찾기
let str2 = "hello world";
console.log(str2.indexOf('hello'));
console.log(str2.indexOf('Hello'));
console.log(str2.indexOf('world'));
console.log(str2.indexOf('o',2));
