//객체

let user = {
    name : 'jin',
    age : 25,
    "like birds" : true,
    isAdmin : true
}
console.log(user.name);
console.log(user.age);
console.log(user["like birds"]);
console.log(user.isAdmin);

delete user.age;
//set
user["like birds"] = false;
//get
console.log(user['like birds']);
console.log();

//const 로 선언된 객체는 수정이 가능하다
const users = {
    name : 'jin'
}
users.name = 'jin2';
console.log(users.name);

function makerUser(name,age) {
    return {
        name : name,
        age : age
    };
}


let user2 = makerUser('jin',25);
console.log(user2.name);
console.log();


//프로퍼티 이름에는 예약어를 사용해두 된다
let obj = {
    for : 1,
    let : 2,
    return :3
}
console.log(obj.for + obj.let + obj.return);

let user4 = {
    name : 'abc',
    age : 25
}
console.log('name' in user4);
console.log();
//for - in 반복문
for (let key in user) {
    console.log( key ); //프로퍼티
    console.log( user[key] ); //객체값
}
console.log();
//객체 정렬 방식 => 정수는 자동정렬, 그외 프로퍼티는 객체에 추가한 순더대로 정렬

let codes = {
    '+49' : '독일',
    '+41' : '스위스',
    '+44' : '영국',
    '+1' : '미국'
};

for (let code in codes) {
    console.log(code);
    console.log(codes);
}

// 객체는 프로퍼티 (키-값 쌍) 을 지정합니다.

let user5 ={
    name : 'john',
    surname : 'smith'
}

user5["name"]='pete';
delete user5.name;
console.log(user5)
















