//boolean형 반환
console.log(2>1); //true
console.log(2==1); //false
console.log(2!=1);

let result = 5>4;
console.log(result);
console.log();

//문자열 비교
console.log('Z'>'A');
console.log('Glow'>'Glee');
console.log('Bee'>'Be');
console.log();
//다른 형을 가진 값 간의 비교
console.log('2'>1); //2가 숫자2로 변형된 후 삭제된다.
console.log('01'==1);
console.log();

//일치 연산자
console.log(0==false);
console.log( '' == false);
console.log();

//null이나 undefined
console.log(null===undefined); //일치연산자.Equals
console.log(null==undefined); //동등연산자
console.log(null>0);
console.log(null==0);
console.log(null>=0);
console.log()

//비교가 불가능한 undefined
console.log(undefined >0);
console.log(undefined <0);
console.log(undefined ==0);
