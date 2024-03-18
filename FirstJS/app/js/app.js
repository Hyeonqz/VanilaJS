console.log(5454545);
console.log("1234")
console.log(5+2);
console.log(5*2);
console.log(5/2);

const a = 5; // const - > 불변의 수

console.log()

const playerName = "nico";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit";

const player = ["nico",1212,false,"little bit"];
console.log(player)

const player1 = {
  name : "nico",
  points : 1212,
  handsome : false,
  fat : "little bit"
}
console.log(player1)
console.log(player1["name"])

function sayHello() {
  console.log("hello hi");
}

sayHello();

function sayHello2(nameOfPerson,age) {
  console.log(nameOfPerson,age);
}

sayHello2("jin",25);
sayHello2("hyun",30);
sayHello2("kyu",50);

function plus(a,b) {
  console.log(a,b);
}
plus();

function divide(a,b) {
  console.log(a/b);
}
divide(10/5);