function sayHi() {
    console.log("안녕하세요")
};
setTimeout(sayHi,1000);

function sayHi1(who, phrase) {
    console.log( who + ' 님,' + phrase)
}
setTimeout(sayHi1, 1000, "진현규", "안녕?");

let timerId = setTimeout(() => console.log( "아무일도 일어나지 않는다"),1000);
console.log(timerId);

clearTimeout(timerId);
console.log(timerId);

// 2초 간격으로 메시지를 보여줌
let timerId1 = setInterval(() => console.log('째깍'), 2000);

// 5초 후에 정지
setTimeout(() => { clearInterval(timerId1); console.log('정지'); }, 5000);

// 중첩 setTimeout
let timer = setTimeout( function tick() {
    console.log("hi");
    timer = setTimeout(tick,2000);
}, 2000);