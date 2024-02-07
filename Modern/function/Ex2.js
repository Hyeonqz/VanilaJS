function sayHi() {
    console.log('hello');
}

let func = sayHi;
func();
sayHi();

function ask(question, yes, no) {
    if(confirm(question)) {
        yes();
    } else {
        no();
    }
}

function showOk() {
    console.log('동의한다');
}
function showCancel() {
    consoel.log('취소 버튼 클릭함')
}

ask('동의하십니까?',showOk,showCancel);

//함수 선언문
function sum(a,b) {
    return a+b;
}

//함수 표현식
let sum = function(a,b) {
    return a+b;
};

//함수는 값이다.
//함수선언문 방식으로 함수를 생성하면, 함수가 독립적 구문 형태로 존재한다
//함수 표현식으로 함수를 생성하면, 함수가 표현식의 일부로 존재하게 됩니다.
//함수 선언문은 코드 블록이 실행되기도 전에 처리됩니다. 블록 어디서든 활용 가능하다
//함수 표현식은 실행 흐름이 표현식에 다다랐을 때 만들어진다.