// OR : || => 연산자 한개라도 참이면 참값을 반환
console.log(true||true);
console.log(true||false);
console.log(false||true);
console.log(false||false);

let hour =12;
let isWeekend = true;

if(hour<10 || hour>18 || isWeekend) {
    console.log('영업시간이 아닙니다');
}

let firstName = '';
let lastName = '';
let nickName = '바잉올렛';
console.log(firstName || lastName || nickName||'익명');

// And : && => 연산자 모두 참이면 true를 반환함
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

let minute = 30;
if(hour==12 && minute==30) {
    console.log("현재 시각은 12시 30분입니다.");
}


















