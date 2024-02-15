let arr = ["bora","Lee"];

let [firstName, surname] = arr;
console.log(firstName);
console.log(surname);

console.log();
let firstName1 = arr[0];
let surname1 = arr[1];

let [fname, , title] = ["1","2","3"];
console.log(title);

console.log()

let[a,b,c] = "abc";
let [one,two,three] = new Set([1,2,3]);
let user = {};
[user.name, user.surname] = "bora lee".split(" ");
console.log(user.name);

// .entries()로 반복하기
let user1 = {
    name : 'jin',
    age : 25
};

for (let [key,value] of Object.entries(user1)) {
    console.log(`${key} : ${value}`);
}
console.log();

//변수 교환 트릭
let guest = "jane";
let admin = "pete";
[guest, admin] = [admin, guest];
console.log(`${guest} : ${admin}`);
console.log()

//객체 분해하기
let options = {
    title1 : "Menu",
    width : 100,
    height : 200
};

let {title1, width, height} = options;
console.log(title1);
console.log(width);
console.log(height);




































