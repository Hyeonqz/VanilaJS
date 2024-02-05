/* 동기적 프로그래밍
* */

//비동기 프로그래밍
// setTimeout(()=> {
// 로직
//}

function work(callback) {
    setTimeout(()=> {
    const start = Date.now();
    for (let i = 0; i <100000000 ; i++) {
        }
        const end = Date.now();
        console.log(end-start + 'ms');
        callback();
    }, 0);
}
// 만약에 work() 함수가 끝나고 다음에 어떤 작업을 처리하고 싶다면?
// => 콜백 함수를 파라미터로 전달해주면 됩니다.
console.log('작업시작!');
work(()=> {
    console.log('작업이 끝났어요!')
});
console.log('다음 작업');

