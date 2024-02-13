function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("보라");

console.log(user.name);
console.log(user.isAdmin);

function UserA(name) {
    //this = {} 암시적으로 만들어짐
    this.name = name;
    this.isAdmin = false;
    // return this; (this가 암시적으로 반환됨)
}

let userB = new function() {
    this.name = 'jin';
    this.isAdmin = false;
    //로직
}

function UserC(name) {
    this.name = name;

    this.sayHi = function() {
        console.log("제 이름은 " + this.name + " 입니다.");
    }
}

let bora = new UserC("진보라");
bora.sayHi();