/*
* writable - true -> 값 수정 가능
* enumerabel - true -> 반복문을 사용해 나열할 수 있다.
* configurable - true -> 프로퍼티 삭제나 플래그 수정이 가능하다.
* */

let user = {
    name : 'john'
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(JSON.stringify(descriptor, null, 2))


let user1 = {
    name : 'john'
}
Object.defineProperties(user, 'name', {
    writable : false
})
user1.name=  "hi?";

let user2 = {
    name : 'john',
    toString() {
        return this.name;
    }
};

for (let key in user) {
    console.log(key);
}