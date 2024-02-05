// 비동기 작업을 조금 더 편리하게 처리할 수 있도록 ES6에 도입된 기능이다.
// callback()함수로 처리할 경우 코드가 쉽게 난잡해지게 된다.

/*
function increaseAndPoint(n, callback) {
    setTimeout(() => {
        const increased = n+1;
        console.log(increased);
        if(callback) {
            callback(increased);
        }
    }, 1000); //1초 씩 기다리고 실행
}
*/

/*increaseAndPoint(0, (n) => {
    increaseAndPoint(0, (n) => {
        increaseAndPoint(0, (n) => {
            increaseAndPoint(0, (n) => {
                increaseAndPoint(0, (n) => {
                    console.log('끝!');
                });
            });
        });
    });
});*/

// => 콜백 지옥이다. 이게
// 이것을 해결하기 위해서 promise를 사용한다.
//Promise는 실패할수도있고, 성공할 수도 있다.

const myPromise = new Promise((resolve, reject) => {
    //로직
    setTimeout(()=> {
        reject(new Error());
    },1000);
});

myPromise.then(n=> {
    console.log(n);
})
    .catch(error => {
        console.log(error);
    })

function increaseAndPrint(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = n + 1;
            if (value === 5) {
                const error = new Error();
                error.name = 'ValueIsFiveError';
                reject(error);
                return;
            }
            console.log(value);
            resolve(value);
        }, 1000);
    });
}

increaseAndPrint(0).then((n) => {
    console.log('result: ', n);
})














