let user ={
    name : 'jin',
    age : 30
}

//메서드 만들기
user.sayHi = function() {
    console.log("hi");
}

user.sayHi();

//메서드 -> 객체 프로퍼티에 할당된 함수를 메서드 라고 부른다.
//UML을 활용한 객체지향 분석 설계

//객체 리터럴 안에 메서드를 선언할 때 단축 문법
user = {
    sayHi() {
        console.log("hello")
    }
}

function sayHi1() {
    console.log(this.name);
}

function go() {
    console.log(this);
}

go();

//화살표 함수는 일반 함수와 달리 고유한 this를 가지지 않느낟.

let userB = {
    firstName : '규',
    sayHi() {
        let arrow = () =>
            console.log(this.firstName);
            arrow();
    }
}

userB.sayHi();

console.log();


let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a*this.b;
    },
    read() {
        console.log(this.a);
        console.log(this.b);
    }
}



