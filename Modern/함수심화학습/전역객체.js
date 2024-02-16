console.log("hello");

if(!window.Promise) {
    console.log("구식 브라우저를 사용중이군요")
}

/*
* 전역 객체를 사용하면 어디서든 접근 가능한 변수를 만들 수 있다.
* 전역 객체엔 Array와 같은 내장 객체, window.innerHeight(뷰포트의 높이를 반환함) 같은 브라우저 환경 전용 변수가 저장되어 있다.
* 전역 객체는 globalThis 라는 보편적인 이름으로 불린다.
*
* */