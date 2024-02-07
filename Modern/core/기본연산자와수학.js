let x = 1, y=3;
console.log(y-x);
console.log(5%2);
console.log(8%3);

console.log(2**2);
console.log(2**3);
console.log(2**4);

console.log(4**(1/2));

let s= 'my' + 'string';
console.log(s);

console.log('1'+2);
console.log(2+'1');

console.log(2+2+'1'); //41
console.log(6-'2'); //4
console.log('6'/'2'); //3

//단항 연산자 + 와 숫자형으로 변환
console.log(+true);
console.log(+'');

let apples = '2';
let oranges = '3';
console.log(apples + oranges);
console.log(+apples + +oranges);

let a = 1;
let b= 2;
let c = 3-(a=b+1);
console.log(a);
console.log(c);

let n = 2;
n = n+5;
n +=5;
n = n*2;
n *=2;
console.log(n);

let counter = 1;
let a1 = ++counter;
console.log(a1);
console.log(3 * counter++)
//코드의 가독성이 떨어지므로, 한줄에 한 가지 역할을 하는 코드만 작성한다.
//b++은 연산이 끝나고 증가하고 다음 라인부터 적용이 됨
//++b는 바로 적용이 됨.

